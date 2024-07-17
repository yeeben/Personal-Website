import React from "react";
import { Link } from "react-router-dom";

import INFO from "../../data/user";

import "./styles/logo.css";

const Logo = (props: { width: number; link?: boolean; }) => {
	const { width, link=true} = props;


	const imageElement = (
		<img src={INFO.main.logo} alt="logo" className="logo" width={width} />
	);

	return (
		<React.Fragment>
			{link ? <Link to="/">{imageElement}</Link> : imageElement}
		</React.Fragment>
	);
};

export default Logo;
