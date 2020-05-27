import React from "react";

export default function Button({ getFriend }) {
	return (
		<div>
			<button className='NewUserButton' onClick={() => getFriend()}>
				Get a friend!
			</button>
		</div>
	);
}
