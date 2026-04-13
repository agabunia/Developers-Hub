import styles from "./Header.module.css";
import type { HeaderActionsProps } from "./header.types";
import { socialLinks } from "./header.config";
import phoneIcon from "../../../assets/icons/call.svg";

export default function HeaderActions({ phone }: HeaderActionsProps) {
  const normalizedPhone = phone.replace(/\s+/g, "");

  return (
    <div className={styles.actions}>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className={styles.iconLink}
          aria-label={link.label}
          target="_blank"
          rel="noreferrer"
        >
          <img src={link.icon} alt={link.label} className={styles.socialIcon} />
        </a>
      ))}

      <a href={`tel:${normalizedPhone}`} className={styles.phoneLink}>
        <img src={phoneIcon} alt="Phone" className={styles.phoneIcon} />
        <span>{phone}</span>
      </a>
    </div>
  );
}