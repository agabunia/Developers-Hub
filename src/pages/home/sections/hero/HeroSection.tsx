import heroBanner from "../../../../assets/home/ezo-banner.png";
import heroLogo from "../../../../assets/home/ezo-logo.jpg";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section" aria-label="Hero section">
      <div className="hero-section_image-wrapper">
        <img
          src={heroBanner}
          alt="Residential complex banner"
          className="hero-section_image"
        />
      </div>

      <div className="hero-section_overlay">
        <div className="hero-section_logo">
          <img
            src={heroLogo}
            alt="Company logo"
            className="hero-section_logo-image"
          />
        </div>

        <div className="hero-section_search">
          <span className="hero-section_search-icon" aria-hidden="true">
            🔍
          </span>

          <input
            type="text"
            placeholder="Find your article"
            className="hero-section_search-input"
          />
        </div>
      </div>
    </section>
  );
}