import React from "react";
import "./App.css";
import Hobbylist from "./components/Hobbylist";
import Guarantee from "./components/Guarantee";
import chat from "./chat.png";
import fdelivery from "./f-delivery.png";
import coin from "./coin.png";
import Counter from "./components/Counter";

const benefits = [
	{
		imgSrc: fdelivery,
		alt: "A shipping truck",
		title: "Free Shipping",
		description:
			"Phasellus ac fringilla sapien. Quisque hendrerit nisi eu ligula dictum, vitae molestie augue vehicula. Nunc accumsan lacus ac sem tincidunt ultrices. Nullam consequat ultricies arcu, et egestas augue sodales at.",
	},
	{
		imgSrc: coin,
		alt: "A USD coin above a hand",
		title: "100% Money Back",
		description:
			"Phasellus ac fringilla sapien. Quisque hendrerit nisi eu ligula dictum, vitae molestie augue vehicula. Nunc accumsan lacus ac sem tincidunt ultrices. Nullam consequat ultricies arcu, et egestas augue sodales at.",
	},
	{
		imgSrc: chat,
		alt: "two chat balloons",
		title: "Online support 24/7",
		description:
			"Phasellus ac fringilla sapien. Quisque hendrerit nisi eu ligula dictum, vitae molestie augue vehicula. Nunc accumsan lacus ac sem tincidunt ultrices. Nullam consequat ultricies arcu, et egestas augue sodales at.",
	},
];

function App() {
	return (
		<div className='App'>
			<header className='App-header'>Week-1 React Exercises</header>
			<hr className='hr' />
			<Hobbylist />
			<ul className='benefits-list'>
				{benefits.map(benefit => (
					<Guarantee benefit={benefit} />
				))}
			</ul>
			<Counter />
		</div>
	);
}

export default App;
