import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

export default function Projects() {
  return (
    <div className="projects w-full text-[#2D3142]" id="project-page">
      <div className="proj-cont h-[400vh] relative">
        <div className="proj-slides sticky flex top-0 left-0 w-full h-[100vh] overflow-x-hidden">
          <div className="slide project-intro w-full h-screen flex-shrink-0">
            <h1>Projects.</h1>
          </div>

          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
