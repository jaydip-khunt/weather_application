import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather, fetchNearbyCities} from "./WeatherThunks";

const initialState = {
    weatherData: null,
    nearbyCities: [],
    loading: false,
    error: null,
};

const weatherSlice = createSlice({
	name: "weather",
	initialState,
	reducers: {
		clearWeatherData: (state) => {
			state.weatherData = null;
		},
	},
	extraReducers: (builder) => {
		builder
		.addCase(fetchWeather.pending, (state) => {
			state.loading = true;
			state.error = null;
		})
		.addCase(fetchWeather.fulfilled, (state, action) => {
			state.loading = false;
			state.weatherData = action.payload;
		})
		.addCase(fetchWeather.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		})
		.addCase(fetchNearbyCities.pending, (state) => {
			state.loading = true;
		})
		.addCase(fetchNearbyCities.fulfilled, (state, action) => {
			state.loading = false;
			state.nearbyCities = action.payload;
		})
		.addCase(fetchNearbyCities.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});
  	},
});

export const { clearWeatherData } = weatherSlice.actions;
export default weatherSlice.reducer;