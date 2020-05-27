import React from "react";

export default function DogButton({ getDogPhoto }) {
	return (
		<button className='button' onClick={() => getDogPhoto()}>
			Get a dog!
		</button>
	);
}
