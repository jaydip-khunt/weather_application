import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "3fde12cf777aed9c5ef70331f3c22a32";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// Fetch weather for a specific city or coordinates
export const fetchWeather = createAsyncThunk("weather/fetchWeather", async ({ city, latitude, longitude }) => {
    try {
        const endpoint = city
            ? `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
            : `${BASE_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  
        const response = await axios.get(endpoint);
        return response.data;
    } catch (error) {
        throw new Error("Failed to fetch weather data");
    }
});
  
// Fetch weather for nearby cities
export const fetchNearbyCities = createAsyncThunk("weather/fetchNearbyCities", async ({ latitude, longitude }) => {
    try {
        const response = await axios.get(`${BASE_URL}/find?lat=${latitude}&lon=${longitude}&cnt=6&appid=${API_KEY}&units=metric`);
        return response.data.list;
    } catch (error) {
        throw new Error("Failed to fetch nearby cities");
    }
});