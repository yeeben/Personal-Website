import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { ProjectType } from "../../data/projectsInfo";

import "./styles/project.css";

const ProjectTile = (props: ProjectType) => {
	const { logo, title, description, linkText, link, downloadLink } = props;

	return (
		<React.Fragment>
			<div className="project">
			<a href={`projects/${link}`} rel="noopener noreferrer">

				<div className="project-container">
					<div className="project-logo">
						<img src={logo} alt="logo" />
					</div>
					<div className="project-title">{title}</div>
					<div className="project-description">{description}</div>
					<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>
							<div className="project-link-text">{linkText}</div>


						{downloadLink && (
						<a href={`${downloadLink}`} target="_blank" rel="noopener noreferrer">
							<div className="project-link-text"> View Source </div>
						</a>
						)}
					</div>
				</div>
				</a>

			</div>
		</React.Fragment>
	);
};

export default ProjectTile;
