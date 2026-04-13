export type HeaderProps = {
  userName?: string;
  userId?: string;
  phone?: string;
};

export type ProfileCardProps = {
  userName: string;
  userId: string;
};

export type HeaderActionsProps = {
  phone: string;
};

export type NavItem = {
  label: string;
  to: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};