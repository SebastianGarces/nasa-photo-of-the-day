import React from "react";

import "./ImageOfTheDay.styles.scss";

const ImageOfTheDay = ({ data: { hdurl, title, explanation } }) => {
	console.log(hdurl);

	return (
		<div
			className="image-container"
			style={{
				backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${hdurl}) `
			}}
		>
			<h1 className="title">{title}</h1>
			<h2>{`Description: `}</h2>
			<p>{explanation}</p>
		</div>
	);
};

export default ImageOfTheDay;
