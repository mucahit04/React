import React from "react";
import HobbyItem from "./HobbyItem";

export default function Hobbylist() {
	const hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"];
	return (
		<ul>
			{hobbies.map((hobby, index) => (
				<HobbyItem hobby={hobby} key={index} />
			))}
		</ul>
	);
}
