import type { NavItem, SocialLink } from "./header.types";
import facebookIcon from "../../../assets/icons/fb.svg";
import instagramIcon from "../../../assets/icons/insta.svg";
import linkedinIcon from "../../../assets/icons/linkedin.svg";

export const navItems: NavItem[] = [
  { label: "მთავარი", to: "/" },
  { label: "დეველოპერები", to: "/developers" },
  { label: "პროექტები", to: "/projects" },
  { label: "შეთავაზებები", to: "/offers" },
];

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "https://www.facebook.com/", icon: facebookIcon },
  { label: "Instagram", href: "https://www.instagram.com/", icon: instagramIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: linkedinIcon },
];