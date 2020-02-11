import React from "react";
import styled from "styled-components";

const VideoOfTheDay = ({ data: { title, explanation, media_type, url } }) => {
	if (media_type === "video") {
		return (
			<StyledVideoOfTheDay>
				<iframe
					width="1280"
					height="720"
					src={`${url}&autoplay=1&loop=1&controls=1`}
					title="Video of the Day"
				></iframe>
				<h1 className="title">{title}</h1>
				<h2>{`Description: `}</h2>
				<p>{explanation}</p>
			</StyledVideoOfTheDay>
		);
	}
};

const StyledVideoOfTheDay = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	iframe {
		border: none;
	}

	.title {
		margin: 1rem 0;
	}

	h2 {
		margin: 0.5rem 0;
		opacity: 0.7;
	}

	p {
		width: 1280px;
		text-align: start;
		opacity: 0.7;
	}
`;

export default VideoOfTheDay;
