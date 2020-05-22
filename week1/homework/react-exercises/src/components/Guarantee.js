import React from "react";

export default function Guarantee({ props }) {
	const { imgSrc, title, description } = props;

	return (
		<li className='list-item'>
			<img src={imgSrc} alt='' />

			<h3>{title}</h3>

			<p>{description}</p>
		</li>
	);
}
