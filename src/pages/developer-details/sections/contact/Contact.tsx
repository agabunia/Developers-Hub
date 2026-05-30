import { useMemo, useState } from "react";
import { aboutSections, type SocialMediaType } from "../about/about.mock";
import { getProjectsByDeveloper } from "../projects/projects.mock";
import {
  bestCallTimes,
  getContactInfoByDeveloper,
  type ContactInfoType,
} from "./contact.mock";
import "./Contact.css";

const socialMediaImages = import.meta.glob("../../../../assets/icons/**/*", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

type ContactProps = {
  developerId: number;
};

function getSocialMediaImageUrl(imageLocation: string) {
  return socialMediaImages[`../../../../assets/icons/social-media/${imageLocation}`];
}

export default function Contact({ developerId }: ContactProps) {
  const contact = getContactInfoByDeveloper(developerId);
  const about = aboutSections.find((item) => item.developer_id === developerId);
  const projects = useMemo(
    () => getProjectsByDeveloper(developerId),
    [developerId],
  );

  if (!contact) {
    return <div className="contact-section_empty">Contact information coming soon...</div>;
  }

  return (
    <section className="contact-section">
      <ContactCard contact={contact} projects={projects} />

      {about && about.social_media.length > 0 && (
        <SocialMediaPanel
          developerName={about.name_eng}
          socialMedia={about.social_media}
        />
      )}
    </section>
  );
}

function ContactCard({
  contact,
  projects,
}: {
  contact: ContactInfoType;
  projects: ReturnType<typeof getProjectsByDeveloper>;
}) {
  const [selectedProjectId, setSelectedProjectId] = useState("");
  const [selectedCallTime, setSelectedCallTime] = useState("");

  return (
    <div className="contact-card">
      <div className="contact-card_header">
        <h2>Contact with developer</h2>
        <span>OR</span>
        <h2>Let developer contact with you</h2>
      </div>

      <div className="contact-card_divider" />

      <div className="contact-card_body">
        <div className="contact-column">
          <ContactField label="Mobile phone" value={contact.mobile_phone} readOnly />
          <ContactField label="Hot line" value={contact.hot_line} readOnly />
          <ContactField label="E-Mail" value={contact.email} readOnly />
          <ContactField label="Head quarter" value={contact.head_quarter} readOnly />
        </div>

        <div className="contact-card_vertical-divider" />

        <form className="contact-column" onSubmit={(event) => event.preventDefault()}>
          <ContactField label="Mobile phone" name="mobile-phone" />
          <ContactField label="Name" name="name" />

          <label className="contact-field interested-project">
            <span>Project you're interested in</span>
            <select
              value={selectedProjectId}
              onChange={(event) => setSelectedProjectId(event.target.value)}
              aria-label="Project you're interested in"
            >
              <option value=""></option>
              {projects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.name_eng}
                </option>
              ))}
            </select>
          </label>

          <label className="contact-field call-time">
            <span>Best time for a call</span>
            <select
              value={selectedCallTime}
              onChange={(event) => setSelectedCallTime(event.target.value)}
              aria-label="Best time for a call"
            >
              <option value=""></option>
              {bestCallTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </label>
        </form>
      </div>
    </div>
  );
}

function ContactField({
  label,
  name,
  value = "",
  readOnly = false,
}: {
  label: string;
  name?: string;
  value?: string;
  readOnly?: boolean;
}) {
  return (
    <label className="contact-field">
      <span>{label}</span>
      <input name={name} value={value} readOnly={readOnly} />
    </label>
  );
}

function SocialMediaPanel({
  developerName,
  socialMedia,
}: {
  developerName: string;
  socialMedia: SocialMediaType[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;
  const maxIndex = Math.max(0, socialMedia.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <div className="contact-social">
      <h2 className="contact-social_title">{developerName}'s social media</h2>

      <div className="contact-social_panel">
        <button
          className="contact-social_arrow"
          type="button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Previous social media"
        >
          <ArrowLeftIcon />
        </button>

        <div className="contact-social_viewport">
          <div
            className="contact-social_track"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {socialMedia.map((social) => (
              <SocialMediaLink key={social.id} social={social} />
            ))}
          </div>
        </div>

        <button
          className="contact-social_arrow"
          type="button"
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
          aria-label="Next social media"
        >
          <ArrowRightIcon />
        </button>
      </div>

      <div className="contact-social_dots">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            className={`contact-social_dot ${idx === currentIndex ? "active" : ""}`}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to social media slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function SocialMediaLink({ social }: { social: SocialMediaType }) {
  const iconUrl = getSocialMediaImageUrl(social.icon_url);

  return (
    <a
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      className="contact-social_link"
      aria-label={social.name}
      title={social.name}
    >
      {iconUrl ? (
        <img src={iconUrl} alt="" loading="lazy" />
      ) : (
        <span>{social.name}</span>
      )}
    </a>
  );
}

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15 5 8 12l7 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m9 5 7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
