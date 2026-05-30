import ProjectCard from "../../../layouts/project-card";
import { profileProjects } from "./myProjects.mock";
import "./MyProjectsPage.css";

function AddProjectCard() {
  return (
    <button className="my-projects_add-card" type="button" aria-label="Add project">
      <span />
    </button>
  );
}

export default function MyProjectsPage() {
  return (
    <div className="my-projects_grid">
      {profileProjects.map((project) => (
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
          isSaved={project.saved}
          href={`/projects/${project.id}`}
        />
      ))}
      <AddProjectCard />
    </div>
  );
}
