
import ProjectTile from "./projectTile";
import PROJECT_INFO from "../../data/projectsInfo";
import "./styles/allProjects.css";

interface AllProjectsProps {
	maxProjects?: number;
  }

const AllProjects: React.FC<AllProjectsProps> = ({ maxProjects }) => {
  const projectsToDisplay = maxProjects
    ? PROJECT_INFO.projects.slice(0, maxProjects)
    : PROJECT_INFO.projects;
	return (
		<div className="all-projects-container">
			{projectsToDisplay.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<ProjectTile
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
