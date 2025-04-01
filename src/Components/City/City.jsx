"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchWeather} from "@/src/Redux/Features/Weather/WeatherThunks";
import {clearWeatherData} from "@/src/Redux/Features/Weather/WeatherSlice";
import Loader from "@/src/Loader/Loader";
import WeatherGrid from "@/src/Components/Home/WeatherGrid";

function CityPage({city}) {
	const dispatch = useDispatch();
	const nearbyCities = [];
	const { weatherData, loading} = useSelector((state) => state.weather);

	useEffect(() => {
		dispatch(fetchWeather({city}));
        return () => {
			dispatch(clearWeatherData());
		};
	}, [dispatch, city]);
	
	return (
		<div className="bg-gradient-to-t from-[#AFF3E6] to-[#4183AA]">
			<div className="container">
				{loading &&  <Loader />}
				<section className="flex flex-col h-lvh overflow-hidden font-poppins">
					<div className="flex flex-col items-center p-4 h-lvh">
                        <WeatherGrid weatherData={weatherData} nearbyCities={nearbyCities}/>
					</div>
				</section>
			</div>
		</div>
	);
}

export default CityPage;
