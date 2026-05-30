import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projectDetails } from "./DeveloperDetails.mock";
import "./DeveloperDetails.css";
import { Feed } from "./sections/feed";
import { About } from "./sections/about";
import { Projects } from "./sections/projects";
import { Gallery } from "./sections/gallery";
import { Review } from "./sections/review";
import { Contact } from "./sections/contact";

type TabType = "feed" | "about" | "projects" | "gallery" | "review" | "contact";

const TABS: { id: TabType; label: string }[] = [
  { id: "feed", label: "Feed" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "gallery", label: "Gallery" },
  { id: "review", label: "Review" },
  { id: "contact", label: "Contact" },
];

const developerImages = import.meta.glob(
  "../../assets/developers/developers_logos/*",
  {
    eager: true,
    import: "default",
    query: "?url",
  },
) as Record<string, string>;

function getDeveloperImageUrl(imageLocation: string) {
  return developerImages[
    `../../assets/developers/developers_logos/${imageLocation}`
  ];
}

export default function ProjectDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<TabType>("feed");
  const [isSaved, setIsSaved] = useState(false);

  const developer = projectDetails.find((item) => item.id === Number(id));

  if (!developer) {
    return (
      <div className="project-details_error">
        <h2>Developer not found</h2>
        <Link to="/developers">Back to developers</Link>
      </div>
    );
  }

  const logoUrl = getDeveloperImageUrl(developer.logo_location);
  const bannerUrl =
    getDeveloperImageUrl(developer.banner_location) || logoUrl;

  return (
    <div className="project-details">
      <div className="project-details_banner">
        {bannerUrl && (
          <img
            src={bannerUrl}
            alt={developer.name_eng}
            className="project-details_banner-img"
          />
        )}
      </div>

      <div className="project-details_header">
        <div className="project-details_card">
          <div className="project-details_logo-wrap">
            {logoUrl ? (
              <img
                src={logoUrl}
                alt={developer.name_eng}
                className="project-details_logo"
              />
            ) : (
              <span className="project-details_logo-fallback">
                {developer.name_eng}
              </span>
            )}
          </div>
          <div className="project-details_info">
            <div className="project-details_info-top">
              <h1 className="project-details_title">
                {developer.name_eng} | {developer.name_geo}
              </h1>
              <div className="project-details_likes">
                <svg
                  className="project-details_likes-save"
                  viewBox="0 0 109 109"
                  fill={isSaved ? "#f5d142" : "none"}
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => setIsSaved(!isSaved)}
                  aria-label="Save"
                >
                  <path
                    d="M86.2918 95.375L54.5002 72.6667L22.7085 95.375V22.7083C22.7085 20.2993 23.6655 17.9889 25.3689 16.2854C27.0724 14.582 29.3828 13.625 31.7918 13.625H77.2085C79.6175 13.625 81.9279 14.582 83.6314 16.2854C85.3348 17.9889 86.2918 20.2993 86.2918 22.7083V95.375Z"
                    stroke="#1E1E1E"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {/* <span className="project-details_likes-icon">❤️</span> */}
                {/* <span className="project-details_likes-value">
                  Likes {(developer.likes / 1000).toFixed(0)}k
                </span> */}
              </div>
            </div>
            <div className="project-details_rating">
              <span className="project-details_rating-value">
                {developer.rating.toFixed(1)}
              </span>
              <div className="project-details_stars">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`project-details_star ${i < Math.floor(developer.rating) ? "filled" : ""}`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="project-details_tabs">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`project-details_tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <div className="project-details_content">
        {activeTab === "feed" && <Feed developerId={developer.id} />}
        {activeTab === "about" && <About developerId={developer.id} />}
        {activeTab === "projects" && <Projects developerId={developer.id} />}
        {activeTab === "gallery" && <Gallery developerId={developer.id} />}
        {activeTab === "review" && <Review developerId={developer.id} />}
        {activeTab === "contact" && <Contact developerId={developer.id} />}
      </div>
    </div>
  );
}
