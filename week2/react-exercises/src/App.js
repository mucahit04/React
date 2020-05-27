import React from "react";
import "./App.css";
import Friend from "./Components/Friend";
import DogGallery from "./Components/DogGallery";
import RandomJoke from "./Components/RandomJoke";
// import Test from "./Components/Test";

function App() {
	function refreshPage() {
		window.location.reload(false);
	}
	return (
		<div className='App'>
			<Friend />
			<div className='dog-photos'>
				<DogGallery />
			</div>
			<div>
				<RandomJoke />
			</div>
			<div>
				<button onClick={() => refreshPage()} className='button'>
					Reload the page!
				</button>
			</div>
		</div>
	);
}

export default App;
