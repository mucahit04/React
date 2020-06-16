import React, { useState, useEffect } from "react";
import DogButton from "./DogButton";
import DogPhoto from "./DogPhoto";

export default function DogGallery() {
	const [dogPhotos, setDogPhotos] = useState([]);
	const [hasError, setError] = useState(false);
	const [isLoading, setLoading] = useState(false);
	const [click, setClick] = useState(0);

	useEffect(() => {
		function getDogPhoto() {
			if (click !== 0) {
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
		}
		getDogPhoto();
	}, [click]);
	return (
		<>
			<div className='dogButton-div'>
				<DogButton setClick={setClick} click={click} />
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
