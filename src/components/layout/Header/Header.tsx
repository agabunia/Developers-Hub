import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import type { HeaderProps } from "./header.types";
import ProfileCard from "./ProfileCard";
import HeaderNav from "./HeaderNav";
import HeaderActions from "./HeaderActions";
import { mockHeaderUser } from "./header.mock";
import { navItems, socialLinks } from "./header.config";
import phoneIcon from "../../../assets/icons/call.svg";
import logoLong from "../../../assets/habita-branding/logo-long.svg";
import logoMid from "../../../assets/habita-branding/logo-mid.svg";

export default function Header({
  userName = mockHeaderUser.userName,
  userId = mockHeaderUser.userId,
  phone = mockHeaderUser.phone,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);
  const normalizedPhone = phone.replace(/\s+/g, "");

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <div className={styles.topRow}>
            <div className={styles.logoGroup}>
              <img src={logoMid} alt="Habita" className={styles.logoMobile} />
              <img src={logoLong} alt="Habita" className={styles.logoDesktop} />
            </div>

            <div className={styles.profileDesktop}>
              <ProfileCard userName={userName} userId={userId} />
            </div>

            <button
              className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ""}`}
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className={styles.hamburgerBar} />
              <span className={styles.hamburgerBar} />
              <span className={styles.hamburgerBar} />
            </button>
          </div>

          <div className={styles.bottomRow}>
            <HeaderNav />
            <HeaderActions phone={phone} />
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <div className={styles.mobileProfile} onClick={closeMenu}>
          <ProfileCard userName={userName} userId={userId} />
        </div>

        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? `${styles.mobileNavLink} ${styles.mobileNavLinkActive}`
                  : styles.mobileNavLink
              }
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.mobileSocial}>
          <p className={styles.mobileSocialTitle}>Social media</p>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.mobileSocialItem}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              <img src={link.icon} alt={link.label} className={styles.mobileSocialIcon} />
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        <a href={`tel:${normalizedPhone}`} className={styles.mobilePhone}>
          <img src={phoneIcon} alt="Phone" className={styles.mobilePhoneIcon} />
          <span>{phone}</span>
        </a>
      </div>

      {isMenuOpen && (
        <div className={styles.backdrop} onClick={closeMenu} aria-hidden="true" />
      )}
    </>
  );
}
