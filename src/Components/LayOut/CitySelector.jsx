import React from "react";
import { cities } from "../../Utils/cities";
import { Search } from "lucide-react";

const CitySelector = ({ city, setCity, handleSearch }) => {

    return (
        <div className="flex items-center gap-2 h-10">
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                list="city-list"
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Search for a city..."
            />
            <datalist id="city-list">
                {cities.map((cityName, index) => (
                    <option key={index} value={cityName} />
                ))}
            </datalist>
            <button onClick={handleSearch} className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
                <Search/>
            </button>
        </div>
    );
};

export default CitySelector;
