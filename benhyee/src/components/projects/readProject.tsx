import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import NavBar from "../common/navBar";
import Footer from "../common/footer";
import Logo from "../common/logo";

import { Project } from "../../components/projects/projectTile";

import PROJECT_INFO from "../../data/projectsInfo";

const ReadProject = (props: Project) => {

	const { project } = props;

	return (
        <div>
            {project.title}
        </div>
	);
};

export default ReadProject;
