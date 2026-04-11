import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

type NavItem = {
  label: string;
  to: string;
};

const navItems: NavItem[] = [
  { label: "მთავარი გვერდი", to: "/" },
  { label: "დეველოპერები", to: "/developers" },
  { label: "პროექტები", to: "/projects" },
];

type HeaderProps = {
  userName?: string;
  userId?: string;
  phone?: string;
};

export default function Header({
  userName = "Gigi Nikoleishvili",
  userId = "487594563",
  phone = "+995 591 99 32 10",
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <div className={styles.logoGroup}>
          <div className={styles.logoBox}>LOGO</div>
          <div className={styles.logoBox}>LOGO</div>
        </div>

        <div className={styles.profileCard}>
          <div className={styles.profileText}>
            <span className={styles.profileName}>{userName}</span>
            <span className={styles.profileId}>ID: {userId}</span>
          </div>

          <div className={styles.profileIcon} aria-hidden="true">
            <span>👤</span>
          </div>
        </div>
      </div>

      <div className={styles.bottomRow}>
        <nav className={styles.nav} aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.navLinkActive}`
                  : styles.navLink
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href="#" className={styles.iconLink} aria-label="Facebook">
            <span>f</span>
          </a>

          <a href="#" className={styles.iconLink} aria-label="Instagram">
            <span>◎</span>
          </a>

          <a href="#" className={styles.iconLink} aria-label="LinkedIn">
            <span>in</span>
          </a>

          <a href={`tel:${phone.replace(/\s+/g, "")}`} className={styles.phoneLink}>
            <span className={styles.phoneIcon}>📞</span>
            <span>{phone}</span>
          </a>
        </div>
      </div>
    </header>
  );
}