import React from "react";
import styled from "styled-components";

const ImageOfTheDay = ({
	data: { hdurl, title, explanation, media_type, url }
}) => {
	console.log(hdurl);

	return (
		<StyledImgContainer
			style={{
				backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${hdurl}) `
			}}
		>
			<StyledTitle>{title}</StyledTitle>
			<StyledHTwo>{`Description: `}</StyledHTwo>
			<StyledText>{explanation}</StyledText>
		</StyledImgContainer>
	);
};

const StyledImgContainer = styled.div`
	width: 80%;
	height: 80%;
	margin: 0 auto;
	padding: 5% 5%;

	font-family: "Open Sans", sans-serif;

	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;

	background-color: rgba(0, 0, 0, 0.5);

	color: white;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const StyledTitle = styled.h1`
	font-size: 100px;
	font-weight: 900;
	text-align: start;
	line-height: 6rem;
`;

const StyledHTwo = styled.h2`
	margin: 6rem 0 1rem;
`;

const StyledText = styled.p`
	text-align: start;
	width: 60%;

	@media (max-width: 1600px) {
		width: 100%;
	}
`;

export default ImageOfTheDay;
