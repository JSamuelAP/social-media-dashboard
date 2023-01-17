import arrowIcons from "../assets/images";

const GrowthArrow = ({ growth, text, aditionalClassName }) => {
	const growthPositive = growth > 0;

	return (
		<span
			className={`card__growth card__growth--${
				growthPositive ? "positive" : "negative"
			} ${aditionalClassName}`}
		>
			<img
				src={growthPositive ? arrowIcons.up : arrowIcons.down}
				alt={`${growthPositive ? "↑" : "↓"}`}
			/>
			{text}
		</span>
	);
};

export default GrowthArrow;
