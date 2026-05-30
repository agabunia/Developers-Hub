import { useState, useMemo } from "react";
import Pagination from "../../../../components/ui/pagination";
import ProjectCard from "../../../../layouts/project-card";
import { getProjectsByStatus } from "./projects.mock";
import "./Projects.css";

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
            />
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
