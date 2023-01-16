const GrowthArrow = ({ growth, text, aditionalClassName }) => {
	const growthPositive = growth > 0;

	return (
		<span
			className={`card__growth card__growth--${
				growthPositive ? "positive" : "negative"
			} ${aditionalClassName}`}
		>
			<img
				src={`src/assets/images/icon-${growthPositive ? "up" : "down"}.svg`}
				alt={`${growthPositive ? "↑" : "↓"}`}
			/>
			{text}
		</span>
	);
};

export default GrowthArrow;
