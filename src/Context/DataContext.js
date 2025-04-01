"use client";
import React, { createContext, useContext, useState } from "react";

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
	const currentDate = new Date();
	const [month, setMonth] = useState(
		(currentDate.getMonth() + 1).toString().padStart(2, "0")
	);
	const [year, setYear] = useState(currentDate.getFullYear().toString());

	return (
		<LayoutContext.Provider value={{ month, setMonth, year, setYear }}>
			{children}
		</LayoutContext.Provider>
	);
};

export const useLayout = () => useContext(LayoutContext);
