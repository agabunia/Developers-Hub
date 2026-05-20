import { useState, useMemo } from "react";
import Pagination from "../../../../components/ui/pagination";
import { getProjectsByStatus, type ProjectType } from "./projects.mock";
import "./Projects.css";

const projectImages = import.meta.glob("../../../../assets/developers/developers_projects/*", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

function getProjectImageUrl(imageLocation: string) {
  return projectImages[`../../../../assets/developers/developers_projects/${imageLocation}`];
}

type FilterType = "all" | "finished" | "on_going";
type ProjectsProps = {
  developerId: number;
};

const ITEMS_PER_PAGE = 9;

export default function Projects({ developerId }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [currentPage, setCurrentPage] = useState(1);

  const allProjects = useMemo(() => {
    const status = activeFilter === "all" ? undefined : (activeFilter as "finished" | "on_going");
    return getProjectsByStatus(developerId, status);
  }, [developerId, activeFilter]);

  const totalPages = Math.ceil(allProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return allProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [allProjects, currentPage]);

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="projects-section">
      {/* Filter Bar */}
      <div className="projects-filter-bar">
        <button
          className={`projects-filter-btn ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => handleFilterChange("all")}
        >
          All
        </button>
        <button
          className={`projects-filter-btn ${activeFilter === "finished" ? "active" : ""}`}
          onClick={() => handleFilterChange("finished")}
        >
          Finished
        </button>
        <button
          className={`projects-filter-btn ${activeFilter === "on_going" ? "active" : ""}`}
          onClick={() => handleFilterChange("on_going")}
        >
          On going
        </button>
      </div>

      {/* Project Count */}
      <div className="projects-header">
        <h3 className="projects-count">
          All Projects <span className="projects-count-value">{allProjects.length}</span>
        </h3>
      </div>

      {/* Projects Grid */}
      {paginatedProjects.length === 0 ? (
        <div className="projects-empty">
          <p>No projects found</p>
        </div>
      ) : (
        <div className="projects-grid">
          {paginatedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        className="projects-pagination"
      />
    </section>
  );
}

function ProjectCard({ project }: { project: ProjectType }) {
  const imageUrl = getProjectImageUrl(project.image_location);

  return (
    <div className="project-card">
      <div className="project-card_image-wrapper">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={project.name_eng}
            className="project-card_image"
          />
        )}

        {/* Status Badge */}
        <div className={`project-card_status project-card_status-${project.status}`}>
          {project.status === "finished" ? "✓ Finished" : "⟳ On going"}
        </div>

        {/* Completion Bar */}
        {project.completion_percentage && (
          <div className="project-card_progress">
            <div
              className="project-card_progress-fill"
              style={{ width: `${project.completion_percentage}%` }}
            />
          </div>
        )}
      </div>

      <div className="project-card_content">
        <div className="project-card_header">
          <div className="project-card_names">
            <h4 className="project-card_name">{project.name_eng}</h4>
            <p className="project-card_name-geo">{project.name_geo}</p>
          </div>

          <div className="project-card_actions">
            <button className="project-card_action-btn" aria-label="Bookmark" title="Bookmark">
              🏷️
            </button>
          </div>
        </div>

        <p className="project-card_location">{project.location_eng}</p>

        {project.area_sqm && project.units_count && (
          <div className="project-card_details">
            <span className="project-card_detail">
              <span className="project-card_detail-label">📍</span>
              {project.area_sqm.toLocaleString()} sqm
            </span>
            <span className="project-card_detail">
              <span className="project-card_detail-label">🏠</span>
              {project.units_count} units
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
