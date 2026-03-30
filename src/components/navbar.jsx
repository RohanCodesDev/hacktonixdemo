import styles from "@/styles/Navbar.module.css";

const ITEMS = [
	{
		label: "Events",
		href: "#events",
		active: true,
		icon: (
			<svg viewBox="0 0 24 24" aria-hidden="true">
				<path
					fillRule="evenodd"
					d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
					clipRule="evenodd"
				/>
			</svg>
		),
	},
	{
		label: "Sponsors",
		href: "#sponsors",
		icon: (
			<svg viewBox="0 0 24 24" aria-hidden="true">
				<path d="M11.48 3.5a.75.75 0 0 1 1.04 0l2.36 2.26 3.25-.46a.75.75 0 0 1 .83.62l.54 3.21 2.58 2.03a.75.75 0 0 1 0 1.18l-2.58 2.03-.54 3.21a.75.75 0 0 1-.83.62l-3.25-.46-2.36 2.26a.75.75 0 0 1-1.04 0l-2.36-2.26-3.25.46a.75.75 0 0 1-.83-.62l-.54-3.21-2.58-2.03a.75.75 0 0 1 0-1.18l2.58-2.03.54-3.21a.75.75 0 0 1 .83-.62l3.25.46 2.36-2.26Z" />
			</svg>
		),
	},
	{
		label: "Teams",
		href: "#teams",
		icon: (
			<svg viewBox="0 0 24 24" aria-hidden="true">
				<path d="M16 11a3 3 0 1 0-2.999-3A3 3 0 0 0 16 11ZM8 12a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm8 1c-2.337 0-7 1.173-7 3.5V19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5c0-2.327-4.663-3.5-7-3.5Zm-8 1c-2.337 0-7 1.173-7 3.5V19a1 1 0 0 0 1 1h6.33A2.47 2.47 0 0 1 8 19v-2.5a4.56 4.56 0 0 1 2.22-3.88A9.69 9.69 0 0 0 8 14Z" />
			</svg>
		),
	},
	{
		label: "Contact Us",
		href: "#contact",
		icon: (
			<svg viewBox="0 0 24 24" aria-hidden="true">
				<path d="M3 5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v12.5A2.75 2.75 0 0 1 18.25 21H5.75A2.75 2.75 0 0 1 3 18.25V5.75Zm2 .2v.05l7 5.25 7-5.25v-.05a.75.75 0 0 0-.75-.75H5.75a.75.75 0 0 0-.75.75Zm14 2.55-6.55 4.91a.75.75 0 0 1-.9 0L5 8.5v9.75c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75V8.5Z" />
			</svg>
		),
	},
];

export default function Navbar() {
	return (
		<nav className={styles.navWrap} aria-label="Primary">
			<div className={styles.menu}>
				{ITEMS.map((item) => (
					<a
						key={item.label}
						href={item.href}
						className={`${styles.item} ${item.active ? styles.active : ""}`}
					>
						{item.icon}
						<span>{item.label}</span>
					</a>
				))}
			</div>
		</nav>
	);
}

