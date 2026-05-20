import { NavLink, Outlet } from "react-router-dom";
import { profileTabs, profileUser } from "./profile.mock";
import "./ProfilePage.css";

function UserIcon() {
  return (
    <svg className="profile-page_user-icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
    </svg>
  );
}

export default function ProfilePage() {
  return (
    <div className="profile-page">
      <section className="profile-page_header" aria-label="Profile information">
        <div className="profile-page_avatar">
          <UserIcon />
        </div>

        <div className="profile-page_identity">
          <h1>{profileUser.name}</h1>
          <p>ID: {profileUser.id}</p>
        </div>
      </section>

      <nav className="profile-page_tabs" aria-label="Profile sections">
        {profileTabs.map((tab) => (
          <NavLink
            key={tab.id}
            className={({ isActive }) =>
              isActive ? "profile-page_tab profile-page_tab-active" : "profile-page_tab"
            }
            to={tab.to}
            end={tab.end}
          >
            {tab.label}
          </NavLink>
        ))}
      </nav>

      <section className="profile-page_panel">
        <Outlet />
      </section>
    </div>
  );
}
