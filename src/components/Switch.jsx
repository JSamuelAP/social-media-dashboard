import { useState } from "react";

const Switch = () => {
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(!active);
	};

	return (
		<div className={`switch ${active ? "active" : ""}`} onClick={handleClick}>
			<div className="switch__circle"></div>
		</div>
	);
};

export default Switch;
