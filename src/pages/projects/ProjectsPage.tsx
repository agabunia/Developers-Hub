import { useMemo, useState } from "react";
import SearchBar from "../../components/ui/search-bar";
import heroBanner from "../../assets/home/ezo-banner.png";
import ProjectCard from "../../layouts/project-card";
import { aboutSections, type PartnersType } from "../developer-details/sections/about/about.mock";
import { projectListings, projectsResultTotal } from "./projects.mock";
import "./ProjectsPage.css";

const logoImages = import.meta.glob("../../assets/developers/developers_logos/*", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

function getLogoImageUrl(imageLocation: string) {
  return logoImages[`../../assets/developers/developers_logos/${imageLocation}`];
}

function FilterChevron() {
  return (
    <svg className="projects-page_filter-chevron" viewBox="0 0 20 20" aria-hidden="true">
      <path d="m5 7.5 5 5 5-5" />
    </svg>
  );
}

function ArrowIcon({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg className="projects-page_suggestion-arrow-icon" viewBox="0 0 24 24" aria-hidden="true">
      {direction === "prev" ? <path d="m15 5-7 7 7 7" /> : <path d="m9 5 7 7-7 7" />}
    </svg>
  );
}


function PartnerLogo({ partner }: { partner: PartnersType }) {
  const logoUrl = getLogoImageUrl(partner.logo_location);

  return (
    <a className="projects-page_partner" href={`/developers/${partner.id}`} aria-label={partner.name_eng}>
      {logoUrl ? (
        <img src={logoUrl} alt={partner.name_eng} loading="lazy" />
      ) : (
        <span>{partner.name_eng}</span>
      )}
    </a>
  );
}

function DevelopersSuggestion() {
  const suggestedPartners = aboutSections[0]?.partners ?? [];

  return (
    <section className="projects-page_suggestions" aria-labelledby="projects-suggestions-title">
      <h2 id="projects-suggestions-title">This developers might have just what you&apos;re looking for</h2>
      <div className="projects-page_suggestions-rule" />

      <div className="projects-page_suggestions-row">
        <button className="projects-page_suggestion-arrow" type="button" aria-label="Previous developers">
          <ArrowIcon direction="prev" />
        </button>

        <div className="projects-page_partners">
          {suggestedPartners.map((partner) => (
            <PartnerLogo key={partner.id} partner={partner} />
          ))}
        </div>

        <button className="projects-page_suggestion-arrow" type="button" aria-label="Next developers">
          <ArrowIcon direction="next" />
        </button>
      </div>

      <div className="projects-page_suggestion-dots" aria-hidden="true">
        <span className="projects-page_suggestion-dot projects-page_suggestion-dot-active" />
        <span className="projects-page_suggestion-dot" />
        <span className="projects-page_suggestion-dot" />
        <span className="projects-page_suggestion-dot" />
        <span className="projects-page_suggestion-dot" />
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  const [query, setQuery] = useState("");

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return projectListings;

    return projectListings.filter((project) =>
      [project.name_eng, project.name_geo, project.developer, project.location_eng, project.status]
        .filter(Boolean)
        .some((value) => (value ?? "").toLowerCase().includes(normalizedQuery)),
    );
  }, [query]);
  const visibleProjects = filteredProjects.slice(0, 6);
  const resultCount = query.trim() ? filteredProjects.length : projectsResultTotal;

  return (
    <div className="projects-page">
      <section className="projects-page_hero" aria-label="Featured project">
        <img src={heroBanner} alt="Featured residential project" className="projects-page_hero-image" />
        <div className="projects-page_hero-dots" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>

      <section className="projects-page_search-section" aria-label="Project search">
        <SearchBar
          className="projects-page_search"
          placeholder="Find your project"
          aria-label="Find your project"
          value={query}
          onSearchChange={setQuery}
        />
        <button className="projects-page_filter-button" type="button" aria-label="Open project filters">
          <FilterChevron />
        </button>
      </section>

      <section className="projects-page_results" aria-labelledby="projects-results-title">
        <h1 id="projects-results-title">
          Your search results <span>{resultCount}</span>
        </h1>

        <div className="projects-page_grid">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name_eng}
              nameSecondary={project.name_geo}
              address={project.location_eng}
              imageLocation={project.image_location}
              status={project.status}
              completionPercentage={project.completion_percentage}
              areaSqm={project.area_sqm}
              unitsCount={project.units_count}
              isSaved={project.isSaved}
              href={`/projects/${project.id}`}
            />
          ))}
        </div>
      </section>

      <nav className="projects-page_pagination" aria-label="Projects pages">
        <a className="projects-page_page projects-page_page-active" href="/projects?page=1" aria-current="page">
          1
        </a>
        <a className="projects-page_page" href="/projects?page=2">
          2
        </a>
        <a className="projects-page_page" href="/projects?page=3">
          3
        </a>
        <a className="projects-page_page" href="/projects?page=4">
          4
        </a>
        <span className="projects-page_page">...</span>
      </nav>

      <DevelopersSuggestion />
    </div>
  );
}
