import React from "react";

export default function FriendProfile({ friend }) {
	const { large } = friend.picture;
	const { first, last } = friend.name;
	const { postcode, city, country, street } = friend.location;

	return (
		<div className='UserCard'>
			<div className='UserCardTop'>
				<img src={large} alt='a friend' />
			</div>
			<div className='UserCardBottom'>
				<h3>
					{first} {last}
				</h3>
				<p>email</p>
				<h5>{friend.email}</h5>
				<p>phone</p>
				<h5>{friend.phone}</h5>
				<p>address</p>
				<h5>
					{street.name} {street.number}, {postcode}
				</h5>
				<h5>
					{city}, {country}
				</h5>
			</div>
		</div>
		// <ul className='friend-profile'>
		// 	<li>
		// 		Name: {first} {last}
		// 	</li>
		// 	<li>
		// 		Address:{street.name},{street.number}, {postcode}
		// 	</li>
		// 	<li>
		// 		{city}, {country}
		// 	</li>
		// 	<li>e-mail: {friend.email}</li>
		// 	<li>Phone:{friend.phone}</li>
		// </ul>
	);
}
