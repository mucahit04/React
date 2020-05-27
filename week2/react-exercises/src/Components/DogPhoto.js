import React from "react";

export default function DogPhoto(props) {
	const imgUrl = props.imgUrl;
	return (
		<div className='dog-div'>
			<img src={imgUrl} alt='a dog' />
		</div>
	);
}
