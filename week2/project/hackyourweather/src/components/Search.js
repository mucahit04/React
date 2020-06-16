import React, { useState, useEffect } from "react";
import CityItem from "./CityItem";

export default function Search() {
	const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

	const [cityName, setCityName] = useState("");
	const [cityData, setCityData] = useState({});
	const [status, setStatus] = useState();
	const [url, setUrl] = useState();
	useEffect(() => {
		const fetchCityWeather = async () => {
			setStatus("loading");
			try {
				const res = await fetch(url);
				if (!res.ok) {
					setStatus("error");
				} else {
					setStatus("success");
					const data = await res.json();
					setCityData(data);
				}
			} catch (error) {
				setStatus("error");
			}
		};
		fetchCityWeather();
	}, [url]);
	return (
		<>
			<div className='search-div'>
				{!cityData.name && <p>Type a city name and search for the weather</p>}
				{status === "loading" && <p>Loading..</p>}
				{status === "error" && <p>Fetch error!</p>}

				<input
					className='input'
					type='text'
					value={cityName}
					onChange={event => {
						const value = event.target.value;
						setCityName(value);
					}}
				/>
				<button
					onClick={() =>
						setUrl(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
					}
				>
					Search
				</button>

				{status === "success" && cityData.name && (
					<div className='city-item'>
						<CityItem cityData={cityData} />
					</div>
				)}
			</div>
		</>
	);
}
