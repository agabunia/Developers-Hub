import { NavLink } from "react-router-dom";
import styles from "./BottomNav.module.css";
import homeIcon from "../../../assets/icons/navigation/home.png";
import developersIcon from "../../../assets/icons/navigation/developers.png";
import projectsIcon from "../../../assets/icons/navigation/projects.png";
import offersIcon from "../../../assets/icons/navigation/offers.png";
import userIcon from "../../../assets/icons/navigation/user.png";

const items = [
  { to: "/", label: "მთავარი", icon: homeIcon, end: true },
  { to: "/developers", label: "დეველოპერები", icon: developersIcon },
  { to: "/projects", label: "პროექტები", icon: projectsIcon },
  { to: "/offers", label: "შეთავაზებები", icon: offersIcon },
  { to: "/profile", label: "პროფილი", icon: userIcon },
];

export default function BottomNav() {
  return (
    <nav className={styles.bottomNav} aria-label="Bottom navigation">
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          className={({ isActive }) =>
            isActive ? `${styles.item} ${styles.itemActive}` : styles.item
          }
        >
          <img src={item.icon} alt="" className={styles.icon} />
          <span className={styles.label}>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
