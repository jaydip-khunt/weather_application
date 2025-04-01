import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {fetchWeather} from "@/src/Redux/Features/Weather/WeatherThunks";
import {clearWeatherData} from "@/src/Redux/Features/Weather/WeatherSlice";
import CitySelector from "@/src/Components/LayOut/CitySelector";

const SearchBar = () => {
    const [city, setCity] = useState("");
    const dispatch = useDispatch();

    const handleSearch = () => {
        if (city.trim()) {
            dispatch(fetchWeather({ city }));
            setCity(city);
        }
        else{
            dispatch(clearWeatherData());
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <CitySelector city={city} setCity={setCity} handleSearch={handleSearch} />
        </div>
    );
};

export default SearchBar;
