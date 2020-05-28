import React, { useEffect, useState } from "react";
import Joke from "./Joke";

function RandomJoke() {
	const [joke, setJoke] = useState({});
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const apiUrl = "https://official-joke-api.appspot.com/random_joke";
				const res = await fetch(apiUrl);
				if (!res.ok) {
					setError(true);
					setIsLoading(false);
				} else {
					const data = await res.json();
					setJoke(data);
					setIsLoading(false);
				}
			} catch (error) {
				setError(true);
			}
		};
		fetchData();
	}, []);

	return (
		<div className='mainDiv-joke'>
			{error && <p>Oh no! The fun couldn't arrived</p>}
			{isLoading && !error && <p>"Loading your joke"</p>}
			{!error && joke.setup && <Joke joke={joke} />}
		</div>
	);
}
export default RandomJoke;
