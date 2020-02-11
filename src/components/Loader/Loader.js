import React from "react";

import styled from "styled-components";

const Loader = () => {
	return (
		<StyledLoader>
			<h1>Loading...</h1>
		</StyledLoader>
	);
};

const StyledLoader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	position: relative;

	&::after {
		content: "";
		background-color: rgba(255, 255, 255, 0.5);
		width: 50px;
		height: 50px;
		border-radius: 50%;
		position: absolute;
		animation: all 5000ms linear infinite;
		animation-name: loader;
	}

	@keyframes loader {
		0% {
			opacity: 0.25;
			transform: scale(1);
		}

		100% {
			opacity: 1;
			transform: scale(15);
		}
	}
`;

export default Loader;
