import heroBanner from "../../../../assets/home/ezo-banner.png";
import heroLogo from "../../../../assets/home/ezo-logo.jpg";
import SearchBar from "../../../../components/ui/search-bar";
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

        <SearchBar
          className="hero-section_search"
          placeholder="Find your article"
          aria-label="Find your article"
        />
      </div>
    </section>
  );
}
