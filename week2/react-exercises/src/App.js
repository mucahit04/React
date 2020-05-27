import React from "react";
import "./App.css";
import Friend from "./Components/Friend";
import DogGallery from "./Components/DogGallery";

function App() {
	return (
		<div className='App'>
			<Friend />
			<div className='dog-photos'>
				<DogGallery />
			</div>
		</div>
	);
}

export default App;
