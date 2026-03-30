import { useEffect, useState } from "react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["600"],
});

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function RollingLetter({ finalChar, delay }) {
  const [char, setChar] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let interval;
    let timeout;

    timeout = setTimeout(() => {
      interval = setInterval(() => {
        const randomChar =
          letters[Math.floor(Math.random() * letters.length)];
        setChar(randomChar);
      }, 45);

      setTimeout(() => {
        clearInterval(interval);
        setChar(finalChar);
        setDone(true);
      }, 850);
    }, delay);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [finalChar, delay]);

  return (
    <span
      className={orbitron.className}
      style={{
        fontSize: "3.5rem",
        fontWeight: "600",
        letterSpacing: "4px",
        color: done ? "#f5f5f5" : "#666",
        filter: done ? "blur(0px)" : "blur(3px)",
        transition: "all 0.25s ease",
      }}
    >
      {char}
    </span>
  );
}

export default function Opening() {
  const text = "XPLORICA";
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // total rolling time ≈ last letter delay + roll duration
    const totalTime = text.length * 220 + 850;

    // fade out
    setTimeout(() => {
      setFadeOut(true);
    }, totalTime + 1400);
  }, [text.length]);

  return (
    <div
      style={{
        height: "100vh",
        background: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 1s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "12px",
        }}
      >
        {text.split("").map((char, index) => (
          <RollingLetter
            key={index}
            finalChar={char}
            delay={index * 220}
          />
        ))}
      </div>
    </div>
  );
}
