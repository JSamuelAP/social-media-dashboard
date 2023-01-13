import React from "react";

function CardToday({ data }) {
	let { title, icon, number, percentage } = data;

	const percentagePositive = percentage > 0;
	percentage = Math.abs(percentage);

	return (
		<article className="card-today">
			<div className="card-today__row">
				<h3 className="card-today__heading">{title}</h3>
				<img src={`src/assets/images/icon-${icon}.svg`} alt={`${icon} icon`} />
			</div>
			<div className="card-today__row">
				<span className="card-today__number">{number}</span>
				<span
					className={`card-today__percentage card-today__percentage--${
						percentagePositive ? "positive" : "negative"
					}`}
				>
					<img
						src={`src/assets/images/icon-${
							percentagePositive ? "up" : "down"
						}.svg`}
						alt=""
					/>
					{percentage}%
				</span>
			</div>
		</article>
	);
}

export default CardToday;
