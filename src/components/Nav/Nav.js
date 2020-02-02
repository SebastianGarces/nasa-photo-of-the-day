import React from "react";

import "./Nav.styles.scss";

import ImageDate from "./ImageDate";
import { ReactComponent as NasaLogo } from "./nasa-logo.svg";

const Nav = ({ data: { date } }) => {
	console.log(date);

	return (
		<nav className="nav-container">
			<NasaLogo className="logo" />
			<h1>APOD</h1>
			<ImageDate date={date} />
		</nav>
	);
};

export default Nav;
