import React, { useEffect, useState } from "react";
import Joke from "./Joke";

function RandomJoke() {
	const [joke, setJoke] = useState({});
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const apiUrl = "https://official-joke-api.appspot.com/random_joke";
			const res = await fetch(apiUrl);
			if (res.status !== 200) {
				setError("oh no the fun has not arrived :(");
				setIsLoading(false);
			} else {
				const data = await res.json();
				setJoke(data);
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);

	return (
		<div className='mainDiv-joke'>
			{error && error}
			{isLoading && !error && <p>"Loading your joke"</p>}
			{!error && joke.setup && <Joke joke={joke} />}
		</div>
	);
}
export default RandomJoke;
