import React from "react";
import { useState } from "react";
import Button from "./Button";
import FriendProfile from "./FriendProfile";

export default function Friend() {
	const [hasError, setError] = useState(false);
	const [friend, setFriend] = useState({});
	const [isLoading, setLoading] = useState(false);

	function getFriend() {
		setLoading(true);
		fetch("https://www.randomuser.me/api?results=1")
			.then(res => {
				if (res.status === 200) {
					setLoading(false);
					return res.json();
				} else {
					setError(true);
				}
			})
			.then(data => setFriend(data.results[0]));
	}

	return (
		<div>
			{isLoading && (
				<img
					className='loading-message'
					src='https://media.tenor.com/images/434fb77a61338f959ba7e16251f199de/tenor.gif'
					alt='loading gif'
				/>
			)}
			<Button getFriend={getFriend} />
			{!isLoading && friend.name && <FriendProfile friend={friend} />}
			{hasError && <p> Ooops</p>}
		</div>
	);
}
