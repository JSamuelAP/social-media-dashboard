import React from "react";

function CardToday({ data }) {
	let { title, icon, number, growthPercentage } = data;

	const growthPositive = growthPercentage > 0;
	growthPercentage = Math.abs(growthPercentage);

	return (
		<article className="card-today">
			<div className="card-today__row">
				<h3 className="card-today__heading">{title}</h3>
				<img src={`src/assets/images/icon-${icon}.svg`} alt={`${icon} icon`} />
			</div>
			<div className="card-today__row">
				<span className="card-today__number">{number}</span>
				<span
					className={`card-today__growth-percentage card-today__growth-percentage--${
						growthPositive ? "positive" : "negative"
					}`}
				>
					<img
						src={`src/assets/images/icon-${growthPositive ? "up" : "down"}.svg`}
						alt=""
					/>
					{growthPercentage}%
				</span>
			</div>
		</article>
	);
}

export default CardToday;
