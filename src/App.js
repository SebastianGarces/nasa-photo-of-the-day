import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

import Nav from "./components/Nav/Nav";
import ImageOfTheDay from "./components/ImageOfTheDay/ImageOfTheDay";
import VideoOfTheDay from "./components/VideoOfTheDay/VideoOfTheDay";
import Loader from "./components/Loader/Loader";

function App() {
	const [data, setData] = useState();

	useEffect(() => {
		axios
			.get(
				"https://api.nasa.gov/planetary/apod?api_key=e2onDEKdztFwew7TgChAczZEAeiu2kFpoFhHPjiZ"
			)
			.then(res => {
				setData(res.data);
			})
			.catch(error => console.log(error));
	}, []);

	console.log(data);

	if (!data) return <Loader />;

	return (
		<div className="App">
			<Nav data={data} />
			{data.media_type === "video" ? (
				<VideoOfTheDay data={data} />
			) : (
				<ImageOfTheDay data={data} />
			)}
		</div>
	);
}

export default App;
