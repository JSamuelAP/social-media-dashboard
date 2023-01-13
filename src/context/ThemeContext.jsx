import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("light");

	const handleTheme = (switchIsActive) => {
		setTheme(switchIsActive ? "light" : "dark");
	};

	return (
		<ThemeContext.Provider value={{ theme, handleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeProvider };
export default ThemeContext;
