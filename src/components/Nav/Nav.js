import React from "react";
import styled from "styled-components";

import ImageDate from "./ImageDate";
import { ReactComponent as NasaLogo } from "./nasa-logo.svg";

const Nav = ({ data: { date } }) => {
	console.log(date);

	return (
		<StyledNav>
			<NasaLogo className="logo" />
			<h1>APOD</h1>
			<ImageDate date={date} />
		</StyledNav>
	);
};

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 10%;
	margin-bottom: 2rem;

	h1 {
		font-size: 40px;
	}

	strong {
		font-size: xx-large;
	}
`;

export default Nav;
