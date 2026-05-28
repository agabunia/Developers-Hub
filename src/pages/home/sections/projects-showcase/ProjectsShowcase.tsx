import { useMemo, useState } from "react";
import "./ProjectsShowcase.css";
import { featuredProjects, type ProjectCard as FeaturedProject } from "./projectsShowcase.mock";

const projectImages = import.meta.glob("../../../../assets/home/project_images/*", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

function getProjectImageUrl(imageLocation: string) {
  return projectImages[`../../../../assets/home/project_images/${imageLocation}`];
}

const FEATURED_PROJECTS_PER_PAGE = 5;
const NEWEST_PROJECTS_LIMIT = 6;

function DotsButton({
  activePage,
  pageCount,
  onPageChange,
}: {
  activePage: number;
  pageCount: number;
  onPageChange: (page: number) => void;
}) {
  return (
    <div className="projects-showcase_dots" aria-label="Featured projects pages">
      {Array.from({ length: pageCount }, (_, page) => (
        <button
          key={page}
          className={
            page === activePage
              ? "projects-showcase_dot projects-showcase_dot-active"
              : "projects-showcase_dot"
          }
          type="button"
          aria-label={`Show featured projects page ${page + 1}`}
          aria-pressed={page === activePage}
          onClick={() => onPageChange(page)}
        />
      ))}
    </div>
  );
}

function SectionIcon() {
  return (
    <svg
      className="projects-showcase_heading-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M4 10.6 12 4l8 6.6V21h-5.7v-6.2H9.7V21H4V10.6Z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="projects-showcase_location-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 22s7-5.4 7-12A7 7 0 0 0 5 10c0 6.6 7 12 7 12Zm0-9.2a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Z" />
    </svg>
  );
}

function FeaturedProjectCard({ project }: { project: FeaturedProject }) {
  const imageUrl = getProjectImageUrl(project.image_location);

  return (
    <article className="projects-showcase_featured-card">
      <div className="projects-showcase_featured-media">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={project.title}
            className="projects-showcase_featured-image"
            loading="lazy"
          />
        ) : (
          <span>{project.title}</span>
        )}
      </div>
      <div className="projects-showcase_featured-body">
        <h3>{project.title}</h3>
      </div>
      <div className="projects-showcase_card-footer">
        <LocationIcon />
        <span>{project.location}</span>
      </div>
    </article>
  );
}

function NewProjectCard({ project }: { project: Pick<FeaturedProject, "id" | "image_location"> }) {
  const imageUrl = getProjectImageUrl(project.image_location);

  return (
    <article className="projects-showcase_new-card" aria-label={`Newest project ${project.id}`}>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt=""
          className="projects-showcase_new-image"
          loading="lazy"
        />
      ) : (
        <span>{project.image_location}</span>
      )}
    </article>
  );
}

export default function ProjectsShowcase() {
  const [activeFeaturedPage, setActiveFeaturedPage] = useState(0);
  const featuredPageCount = Math.ceil(featuredProjects.length / FEATURED_PROJECTS_PER_PAGE);
  const visibleFeaturedProjects = useMemo(() => {
    const startIndex = activeFeaturedPage * FEATURED_PROJECTS_PER_PAGE;

    return featuredProjects.slice(startIndex, startIndex + FEATURED_PROJECTS_PER_PAGE);
  }, [activeFeaturedPage]);
  const newestProjects = featuredProjects.slice(0, NEWEST_PROJECTS_LIMIT);

  return (
    <section className="projects-showcase" aria-labelledby="projects-showcase-title">
      <div className="projects-showcase_panel projects-showcase_featured-panel">
        <div className="projects-showcase_panel-header">
          <h2 id="projects-showcase-title">Featured Projects</h2>
          <DotsButton
            activePage={activeFeaturedPage}
            pageCount={featuredPageCount}
            onPageChange={setActiveFeaturedPage}
          />
        </div>

        <div className="projects-showcase_featured-grid">
          {visibleFeaturedProjects.map((project) => (
            <FeaturedProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="projects-showcase_panel projects-showcase_newest-panel">
        <div className="projects-showcase_newest-header">
          <div className="projects-showcase_title-group">
            <SectionIcon />
            <h2>Newest Projects</h2>
          </div>
        </div>

        <div className="projects-showcase_new-grid">
          {newestProjects.map((project) => (
            <NewProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <a href="/projects" className="projects-showcase_see-all">
        See all projects
      </a>
    </section>
  );
}
