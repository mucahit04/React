import React from "react";

export default function DogButton({ setClick, click }) {
	return (
		<button className='button' onClick={() => setClick(click + 1)}>
			Get a dog!
		</button>
	);
}
