import "./ProjectCard.css";

const projectImages = import.meta.glob("../../assets/developers/developers_projects/*", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

function getImageUrl(imageLocation: string): string | undefined {
  return projectImages[`../../assets/developers/developers_projects/${imageLocation}`];
}

function BookmarkIcon({ filled = false }: { filled?: boolean }) {
  return (
    <svg className="project-card__bookmark-icon" viewBox="0 0 18 22" aria-hidden="true">
      <path d="M3 2.5h12v16.2L9 15.4l-6 3.3V2.5Z" fill={filled ? "currentColor" : "none"} />
      <path d="M3 2.5h12v16.2L9 15.4l-6 3.3V2.5Z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="project-card__location-icon" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M10 18s5.4-5.1 5.4-10a5.4 5.4 0 1 0-10.8 0C4.6 12.9 10 18 10 18Z" />
      <circle cx="10" cy="8" r="1.8" />
    </svg>
  );
}

export type ProjectCardProps = {
  name: string;
  nameSecondary?: string;
  address: string;
  imageLocation: string;
  status: "finished" | "on_going";
  completionPercentage?: number;
  areaSqm?: number;
  unitsCount?: number;
  isSaved?: boolean;
  href?: string;
};

export default function ProjectCard({
  name,
  nameSecondary,
  address,
  imageLocation,
  status,
  completionPercentage,
  areaSqm,
  unitsCount,
  isSaved = false,
  href,
}: ProjectCardProps) {
  const imageUrl = getImageUrl(imageLocation);
  const statusLabel = status === "finished" ? "✓ Finished" : "⟳ On going";

  const mediaContent = (
    <>
      {imageUrl ? (
        <img src={imageUrl} alt={name} className="project-card__image" loading="lazy" />
      ) : (
        <span className="project-card__placeholder" aria-hidden="true" />
      )}

      <div className={`project-card__status project-card__status--${status}`}>
        {statusLabel}
      </div>

      {completionPercentage != null && (
        <div className="project-card__progress">
          <div
            className="project-card__progress-fill"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      )}
    </>
  );

  return (
    <div className="project-card">
      {href ? (
        <a className="project-card__media" href={href} aria-label={name}>
          {mediaContent}
        </a>
      ) : (
        <div className="project-card__media">{mediaContent}</div>
      )}

      <div className="project-card__body">
        <div className="project-card__heading">
          <div className="project-card__names">
            {href ? (
              <a className="project-card__name" href={href}>
                {name}
              </a>
            ) : (
              <h4 className="project-card__name">{name}</h4>
            )}
            {nameSecondary && <p className="project-card__name-secondary">{nameSecondary}</p>}
          </div>

          <button
            className="project-card__bookmark-btn"
            type="button"
            aria-label={`Save ${name}`}
          >
            <BookmarkIcon filled={isSaved} />
          </button>
        </div>

        <p className="project-card__location">
          <LocationIcon />
          {address}
        </p>

        {(areaSqm != null || unitsCount != null) && (
          <div className="project-card__meta">
            {areaSqm != null && (
              <span className="project-card__meta-item">{areaSqm.toLocaleString()} sqm</span>
            )}
            {unitsCount != null && (
              <span className="project-card__meta-item">{unitsCount} units</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
