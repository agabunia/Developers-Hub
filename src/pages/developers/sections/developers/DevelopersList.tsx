import "./DevelopersList.css";
import { developerLogos, type DeveloperLogos } from "./developers.mock";

const logoImages = import.meta.glob("../../../../assets/developers/developers_logos/*", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

function getLogoImageUrl(imageLocation: string) {
  return logoImages[`../../../../assets/developers/developers_logos/${imageLocation}`];
}

function getDeveloperLabel(developer: DeveloperLogos) {
  return [developer.name_eng, developer.name_geo].filter(Boolean).join(" | ");
}

function DeveloperCard({ developer }: { developer: DeveloperLogos }) {
  const logoUrl = getLogoImageUrl(developer.logo_location);
  const label = getDeveloperLabel(developer);

  return (
    <a className="developers-list_card" href={`/developers/${developer.id}`}>
      <span className="developers-list_logo-wrap">
        {logoUrl ? (
          <img className="developers-list_logo" src={logoUrl} alt={label} loading="lazy" />
        ) : (
          <span className="developers-list_logo-fallback">{developer.name_eng}</span>
        )}
      </span>
      <span className="developers-list_name">{label}</span>
    </a>
  );
}

export default function DevelopersList() {
  return (
    <section className="developers-list" aria-label="Developers list">
      <div className="developers-list_grid">
        {developerLogos.map((developer) => (
          <DeveloperCard key={developer.id} developer={developer} />
        ))}
      </div>

      <nav className="developers-list_pagination" aria-label="Developers pages">
        <a className="developers-list_page developers-list_page-active" href="/developers?page=1" aria-current="page">
          1
        </a>
        <a className="developers-list_page" href="/developers?page=2">
          2
        </a>
        <a className="developers-list_page" href="/developers?page=3">
          3
        </a>
        <a className="developers-list_page" href="/developers?page=4">
          4
        </a>
        <span className="developers-list_page">...</span>
      </nav>
    </section>
  );
}
