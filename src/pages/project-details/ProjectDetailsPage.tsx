import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projectDetails } from "./projectDetails.mock";
import "./ProjectDetails.css";
import { Feed } from "./sections/feed";
import { About } from "./sections/about";
import { Projects } from "./sections/projects";
import { Gallery } from "./sections/gallery";

type TabType = "feed" | "about" | "projects" | "gallery" | "review" | "contact";

const logoImages = import.meta.glob("../../assets/developers/developers_logos/*", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const bannerImages = import.meta.glob("../../assets/developers/developers_logos/*", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

function getLogoImageUrl(imageLocation: string) {
  return logoImages[`../../assets/developers/developers_logos/${imageLocation}`];
}

function getBannerImageUrl(imageLocation: string) {
  return bannerImages[`../../assets/developers/developers_logos/${imageLocation}`];
}

export default function ProjectDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<TabType>("feed");

  const developer = projectDetails.find((item) => item.id === Number(id));

  if (!developer) {
    return (
      <div className="project-details_error">
        <h2>Developer not found</h2>
        <Link to="/developers">Back to developers</Link>
      </div>
    );
  }

  const logoUrl = getLogoImageUrl(developer.logo_location);
  const bannerUrl = getBannerImageUrl(developer.banner_location) || getBannerImageUrl(developer.logo_location);

  return (
    <div className="project-details">
      {/* Banner Section */}
      <div className="project-details_banner">
        <img
          src={bannerUrl || "https://via.placeholder.com/1200x300"}
          alt={developer.name_end}
          className="project-details_banner-img"
        />
      </div>

      {/* Developer Card Section */}
      <div className="project-details_header">
        <div className="project-details_card">
          <div className="project-details_logo-wrap">
            {logoUrl ? (
              <img src={logoUrl} alt={developer.name_end} className="project-details_logo" />
            ) : (
              <span className="project-details_logo-fallback">{developer.name_end}</span>
            )}
          </div>
          <div className="project-details_info">
            <h1 className="project-details_title">
              {developer.name_end} | {developer.name_geo}
            </h1>
            <div className="project-details_meta">
              <div className="project-details_rating">
                <span className="project-details_rating-value">{developer.rating.toFixed(1)}</span>
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
              <div className="project-details_likes">
                <span className="project-details_likes-icon">❤️</span>
                <span className="project-details_likes-value">
                  Likes {(developer.likes / 1000).toFixed(0)}k
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <nav className="project-details_tabs">
        <button
          className={`project-details_tab ${activeTab === "feed" ? "active" : ""}`}
          onClick={() => setActiveTab("feed")}
        >
          Feed
        </button>
        <button
          className={`project-details_tab ${activeTab === "about" ? "active" : ""}`}
          onClick={() => setActiveTab("about")}
        >
          About
        </button>
        <button
          className={`project-details_tab ${activeTab === "projects" ? "active" : ""}`}
          onClick={() => setActiveTab("projects")}
        >
          Projects
        </button>
        <button
          className={`project-details_tab ${activeTab === "gallery" ? "active" : ""}`}
          onClick={() => setActiveTab("gallery")}
        >
          Gallery
        </button>
        <button
          className={`project-details_tab ${activeTab === "review" ? "active" : ""}`}
          onClick={() => setActiveTab("review")}
        >
          Review
        </button>
        <button
          className={`project-details_tab ${activeTab === "contact" ? "active" : ""}`}
          onClick={() => setActiveTab("contact")}
        >
          Contact
        </button>
      </nav>

      {/* Tab Content */}
      <div className="project-details_content">
        {activeTab === "feed" && <Feed developerId={developer.id} />}
        {activeTab === "about" && <About developerId={developer.id} />}
        {activeTab === "projects" && <Projects developerId={developer.id} />}
        {activeTab === "gallery" && <Gallery developerId={developer.id} />}
        {activeTab === "review" && (
          <section className="project-details_section">
            <h2>Reviews</h2>
            <p>Coming soon...</p>
          </section>
        )}
        {activeTab === "contact" && (
          <section className="project-details_section">
            <h2>Contact Information</h2>
            <div className="project-details_contact-info">
              <div className="contact-item">
                <span className="contact-label">Phone:</span>
                <span className="contact-value">{developer.contact.phone}</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <span className="contact-value">{developer.contact.email}</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Website:</span>
                <span className="contact-value">{developer.contact.website}</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Instagram:</span>
                <span className="contact-value">{developer.contact.instagram}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
