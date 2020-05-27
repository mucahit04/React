import React from "react";
import DogButton from "./DogButton";
import { useState } from "react";
import DogPhoto from "./DogPhoto";
// import DogPhoto from "./DogPhoto";

export default function DogGallery() {
	const [dogPhotos, setDogPhotos] = useState([]);
	const [hasError, setError] = useState(false);
	const [isLoading, setLoading] = useState(false);

	function getDogPhoto() {
		setLoading(true);
		fetch("https://dog.ceo/api/breeds/image/random")
			.then(res => {
				if (res.status === 200) {
					setLoading(false);
					return res.json();
				} else {
					setError(true);
				}
			})
			.then(data => setDogPhotos(dogPhotos => [...dogPhotos, data.message]));
	}
	return (
		<>
			<div className='dogButton-div'>
				<DogButton getDogPhoto={getDogPhoto} />
			</div>
			<div>
				{hasError && <p>Ooops! Thats an error..</p>}
				{dogPhotos.length === 0 && <p>Get your first dog by clicking the button!</p>}
				{isLoading && (
					<img
						className='loading-gif'
						src='https://cdn.lowgif.com/full/7519ecd00ef27211-animated-dog-gif-11-gif-images-download.gif'
						alt='loading gif'
					/>
				)}
				<div className='dog-gallery'>
					{dogPhotos.map((imgUrl, index) => (
						<DogPhoto key={index} imgUrl={imgUrl} />
					))}
				</div>
			</div>
		</>
	);
}
