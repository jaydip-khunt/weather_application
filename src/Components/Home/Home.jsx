"use client";
import {
	fetchWeather,
	fetchNearbyCities,
} from "@/src/Redux/Features/Weather/WeatherThunks";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import Loader from "@/src/Loader/Loader";
import WeatherGrid from "@/src/Components/Home/WeatherGrid";
import SearchBar from "@/src/Components/Home/SearchBar";

function HomePage() {
	const dispatch = useDispatch();
	let { weatherData, nearbyCities, loading, error } = useSelector((state) => state.weather);
	const [locationGranted, setLocationGranted] = useState(false);

	useEffect(() => {
		const lat = Cookies.get("latitude");
		const lon = Cookies.get("longitude");
		if (lat && lon) {
			setLocationGranted(true);
			dispatch(fetchNearbyCities({ latitude: lat, longitude: lon }));
		} else {
			requestLocationAccess();
		}
	}, [dispatch]);

	const requestLocationAccess = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords;
					Cookies.set("latitude", latitude, { expires: 1 });
					Cookies.set("longitude", longitude, { expires: 1 });
					setLocationGranted(true);
					dispatch(fetchNearbyCities({ latitude, longitude }));
				},
				(error) => {
					console.error("Geolocation error:", error.message);
					alert("Location access denied. Please enable location services in your browser settings.");
				}
		 	 );
		} else {
			alert("Geolocation is not supported by this browser.");
		}
	};

	
	return (
		<div className="bg-gradient-to-t from-[#AFF3E6] to-[#4183AA]">
			<div className="container">
				{loading &&  <Loader />}
				<section className="flex flex-col h-screen overflow-hidden font-poppins">
					<div className="flex flex-col items-center p-4 min-h-scree">
						{!locationGranted ? (
							<p className="text-center text-gray-700 h-lvh">Requesting location access...</p>
						) : (
							<>
							<SearchBar />
							<WeatherGrid weatherData={weatherData} nearbyCities={nearbyCities} />
							</>
						)}
						{error && <p className="text-red-500">{error}</p>}
					</div>
				</section>
			</div>
		</div>
	);
}

export default HomePage;
