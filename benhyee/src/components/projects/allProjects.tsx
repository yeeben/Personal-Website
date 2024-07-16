import React from "react";

import Project from "./project";
import PROJECT_INFO from "../../data/projects";
import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			{PROJECT_INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
