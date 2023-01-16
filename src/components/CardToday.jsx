import GrowthArrow from "./GrowthArrow";

function CardToday({ data }) {
	let { title, icon, number, growthPercentage } = data;

	return (
		<article className="card-today">
			<div className="card-today__row">
				<h3 className="card-today__heading">{title}</h3>
				<img src={`src/assets/images/icon-${icon}.svg`} alt={`${icon} icon`} />
			</div>
			<div className="card-today__row">
				<span className="card-today__number">{number}</span>
				<GrowthArrow
					growth={growthPercentage}
					text={`${Math.abs(growthPercentage)}%`}
					aditionalClassName={"card-today__growth-percentage"}
				/>
			</div>
		</article>
	);
}

export default CardToday;
