import { useState } from "react";
import { aboutSections, type AboutSectionType } from "./about.mock";
import "./About.css";
import FlagIcon from '../../../../assets/icons/user-related/Flag.svg';

const logoImages = import.meta.glob("../../../../assets/developers/developers_logos/*", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const socialMediaImages = import.meta.glob("../../../../assets/icons/**/*", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

function getLogoImageUrl(imageLocation: string) {
  return logoImages[`../../../../assets/developers/developers_logos/${imageLocation}`];
}

function getSocialMediaImageUrl(imageLocation: string) {
  return socialMediaImages[`../../../../assets/icons/social-media/${imageLocation}`];
}

type AboutProps = {
  developerId: number;
};

export default function About({ developerId }: AboutProps) {
  const aboutData = aboutSections.find((item) => item.developer_id === developerId);

  if (!aboutData) {
    return <div className="about-section_empty">About information coming soon...</div>;
  }

  return (
    <div className="about-section">
      <AboutHeader about={aboutData} />
      <AboutDescription about={aboutData} />
      <SinceSection about={aboutData} />
      <PartnersCarousel about={aboutData} />
      <SocialMediaCarousel about={aboutData} />
    </div>
  );
}

function AboutHeader({ about }: { about: AboutSectionType }) {
  return (
    <div className="about-header-div">
      <h2 className="about-header-header">About <span className="about-header-span">{about.name_eng}</span></h2>
    </div>
  );
}

function AboutDescription({ about }: { about: AboutSectionType }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 500;
  const text = about.description_end;
  const shouldTruncate = text.length > maxLength;
  const displayText = isExpanded ? text : `${text.substring(0, maxLength)}${shouldTruncate ? "..." : ""}`;

  return (
    <div className="about-description">
      <p className="about-description_text">{displayText}</p>
      {shouldTruncate && (
        <button className="about-description_toggle" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Show less" : "Continue reading"}
        </button>
      )}
    </div>
  );
}

function SinceSection({ about }: { about: AboutSectionType }) {
  return (
    <div className="since-section">
      <div className="since-section_container">
        <h3 className="since-section_title">Since</h3>
        <div className="since-section_year">
          <span className="since-section_year-value">{about.since_year}</span>
          <div className="since-section_bar" />
          <img src={FlagIcon} alt="flag" className="flag-icon"/>
        </div>
        <p className="since-section_experience">{new Date().getFullYear() - about.since_year} years of experience</p>
      </div>
    </div>
  );
}

function PartnersCarousel({ about }: { about: AboutSectionType }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;
  const maxIndex = Math.max(0, about.partners.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <div className="partners-carousel">
      <h3 className="partners-carousel_title">Partners</h3>
      <div className="partners-carousel_container">
        <button
          className="partners-carousel_arrow partners-carousel_arrow-prev"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Previous partners"
        >
          ‹
        </button>

        <div className="partners-carousel_viewport">
          <div
            className="partners-carousel_track"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {about.partners.map((partner) => (
              <PartnerCard key={partner.id} partner={partner} />
            ))}
          </div>
        </div>

        <button
          className="partners-carousel_arrow partners-carousel_arrow-next"
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
          aria-label="Next partners"
        >
          ›
        </button>
      </div>

      <div className="partners-carousel_dots">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`partners-carousel_dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function PartnerCard({ partner }: { partner: { id: number; name_geo: string; name_eng: string; logo_location: string } }) {
  const logoUrl = getLogoImageUrl(partner.logo_location);

  return (
    <div className="partner-card">
      <div className="partner-card_logo">
        {logoUrl ? (
          <img src={logoUrl} alt={partner.name_eng} />
        ) : (
          <span className="partner-card_logo-fallback">{partner.name_eng}</span>
        )}
      </div>
      <div className="partner-card_info">
        <p className="partner-card_name">{partner.name_eng}</p>
        <p className="partner-card_name-geo">{partner.name_geo}</p>
      </div>
    </div>
  );
}

function SocialMediaCarousel({ about }: { about: AboutSectionType }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;
  const maxIndex = Math.max(0, about.social_media.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <div className="social-carousel">
      <h3 className="social-carousel_title">{about.name_eng}'s social media</h3>
      <div className="social-carousel_container">
        <button
          className="social-carousel_arrow social-carousel_arrow-prev"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Previous social media"
        >
          ‹
        </button>

        <div className="social-carousel_viewport">
          <div
            className="social-carousel_track"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {about.social_media.map((social) => (
              <SocialMediaCard key={social.id} social={social} />
            ))}
          </div>
        </div>

        <button
          className="social-carousel_arrow social-carousel_arrow-next"
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
          aria-label="Next social media"
        >
          ›
        </button>
      </div>

      <div className="social-carousel_dots">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`social-carousel_dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function SocialMediaCard({ social }: { social: { id: number; name: string; icon_url: string; link: string } }) {
  const iconUrl = getSocialMediaImageUrl(social.icon_url);

  return (
    <a href={social.link} target="_blank" rel="noopener noreferrer" className="social-media-card">
      <div className="social-media-card_icon">
        {iconUrl ? (
          <img src={iconUrl} alt={social.name} loading="lazy" />
        ) : (
          <span className="social-media-card_icon-fallback">{social.name}</span>
        )}
      </div>
      <p className="social-media-card_name">{social.name}</p>
    </a>
  );
}
