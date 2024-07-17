import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

import NavBar from "../common/navBar";
import Footer from "../common/footer";
import Logo from "../common/logo";

import { ProjectType } from "../../data/projectsInfo";

import "./styles/project.css";

let ProjectReadStyle = styled.div``;


const ReadProject = (props: { project: ProjectType }) => {

	const { project } = props;
    const navigate = useNavigate();

	ProjectReadStyle = styled.div`
		${project?.content?.style}
	`;

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar />

				<div className="content-wrapper">
					<div className="read-project-logo-container">
						<div className="read-project-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-project-container">
                        <div className="read-project-back">
							<img
								src="../back-button.png"
								alt="back"
								className="read-project-back-button"
								onClick={() => navigate("/projects")}
							/>
						</div>
						<div className="read-project-wrapper">
							<div className="title read-project-title">
								{project?.content?.title}
							</div>

							<div className="read-project-body">
								<ProjectReadStyle>{project?.content?.body}</ProjectReadStyle>
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
    );
};

export default ReadProject;
