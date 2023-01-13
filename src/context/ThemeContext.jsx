import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("light");

	const handleTheme = (switchIsActive) => {
		setTheme(switchIsActive ? "light" : "dark");
	};

	useEffect(() => {
		if (theme === "dark") document.body.classList.add("dark");
		else document.body.classList.remove("dark");
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, handleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeProvider };
export default ThemeContext;
