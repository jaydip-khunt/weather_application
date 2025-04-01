import React from "react";
import WeatherCard from "@/src/Components/Home/WeatherCard";

const WeatherGrid = ({ weatherData, nearbyCities }) => {
	return (
		<div className="mx-auto">
				{
					weatherData?(<WeatherCard weather={weatherData} />):
					(
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
							{nearbyCities.filter((city) => city.name !== weatherData?.name) .map((city, index) => (
								<WeatherCard key={index} weather={city} />
							))}
						</div>
					)
				}
		</div>
  	);
};

export default WeatherGrid;
