import { useState } from "react";
import useTheme from "../hooks/useTheme";

const Switch = () => {
	const [active, setActive] = useState(false);
	const { handleTheme } = useTheme();

	const handleClick = () => {
		setActive(!active);
		handleTheme(active);
	};

	return (
		<div className={`switch ${active ? "active" : ""}`} onClick={handleClick}>
			<div className="switch__circle"></div>
		</div>
	);
};

export default Switch;
