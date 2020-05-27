import React from "react";

export default function Joke({ joke }) {
	const { setup, punchline } = joke;

	return (
		<div className='joke-div'>
			<p>Joke: {setup} </p>
			<p>Punchline: {punchline}</p>
		</div>
	);
}
