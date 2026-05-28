import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import type { HeaderProps } from "./header.types";
import ProfileCard from "./ProfileCard";
import HeaderNav from "./HeaderNav";
import HeaderActions from "./HeaderActions";
import { mockHeaderUser } from "./header.mock";
import logoLong from "../../../assets/habita-branding/logo-long.svg";
import logoMid from "../../../assets/habita-branding/logo-mid.svg";

export default function Header({
  userName = mockHeaderUser.userName,
  userId = mockHeaderUser.userId,
  phone = mockHeaderUser.phone,
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <Link to="/" className={styles.logoGroup}>
            <img src={logoMid} alt="Habita" className={styles.logoMobile} />
            <img src={logoLong} alt="Habita" className={styles.logoDesktop} />
          </Link>

          <div className={styles.profileDesktop}>
            <ProfileCard userName={userName} userId={userId} />
          </div>
        </div>

        <div className={styles.bottomRow}>
          <HeaderNav />
          <HeaderActions phone={phone} />
        </div>
      </div>
    </header>
  );
}
