import React from "react";
import { Cloud, Wind, Thermometer, Droplets, Gauge, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const WeatherCard = ({ weather }) => {
	if (!weather) return null;

	return (
		<Link href={`/city/${weather.name}`}>
			<div className="bg-white/30 backdrop-blur-lg shadow-xl rounded-2xl p-9 flex flex-col items-center transition transform hover:scale-105 hover:bg-white/40">
				<div className="flex items-center gap-2">
					<MapPin size={20} className="text-primary"/>
					<h2 className="text-2xl font-bold text-primary">{weather.name}, {weather.sys.country}</h2>
				</div>

				{/* Weather Icon & Description */}
				<div className="flex justify-between items-center my-4">
					<Image 
						src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
						alt={weather.weather[0].description}
						width={80}
						height={80}
						className="w-20 h-20 object-contain" 
					/>
					<p className="text-xl font-semibold capitalize text-primary">{weather.weather[0].description}</p>
				</div>

				{/* Temperature */}
				<div className="flex items-center gap-2 text-4xl font-bold text-primary">
					<Thermometer size={30} />
					<p>{Math.round(weather.main.temp)}°C</p>
				</div>

				{/* Additional Weather Details */}
				<div className="mt-4 space-y-2">
					<p className="flex items-center gap-2 text-primary">
						<Gauge size={20} /> Air Pressure: {weather.main.pressure} hPa
					</p>
					<p className="flex items-center gap-2 text-primary">
						<Droplets size={20} /> Humidity: {weather.main.humidity}%
					</p>
					<p className="flex items-center gap-2 text-primary">
						<Wind size={20} /> Wind: {weather.wind.speed} m/s
					</p>
					<p className="flex items-center gap-2 text-primary">
						<Cloud size={20} /> Cloudiness: {weather.clouds.all}%
					</p>
				</div>
			</div>
		</Link>
	);
};

export default WeatherCard;
