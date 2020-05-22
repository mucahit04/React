import React from "react";

export default function Button(props) {
	const { count, setCount } = props;
	return (
		<div>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Add 1!
			</button>
			<button
				className='resetBtn'
				onClick={() => {
					setCount(0);
				}}
			>
				Reset
			</button>
		</div>
	);
}
