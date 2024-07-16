import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import NavBar from "../common/navBar.tsx";
import Footer from "../common/footer.tsx";
import Logo from "../common/logo.tsx";

import "../../pages/styles/readProject.css";
import PROJECT_INFO from "../../data/projects.tsx";

let ProjectStyle = styled.div``;

const ReadProject = () => {
	const navigate = useNavigate();
	const { slug } = useParams();

	const project = PROJECT_INFO.projects[slug - 1];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [project]);

	ProjectStyle = styled.div`
		${project().style}
	`;

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar />

				<div className="content-wrapper">
					<div className="read-article-logo-container">
						<div className="read-article-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-article-container">
						<div className="read-article-wrapper">
							<div className="read-article-date-container">
								<div className="read-article-date">
									{project().date}
								</div>
							</div>

							<div className="title read-article-title">
								{project().title}
							</div>

							<div className="read-article-body">
								<ProjectStyle>{project().body}</ProjectStyle>
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
