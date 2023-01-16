const Card = ({ data }) => {
	let {
		socialNetworkName,
		username,
		numFollowers,
		typeFollowers,
		growthToday,
	} = data;

	const growthPositive = growthToday > 0;
	growthToday = Math.abs(growthToday);

	return (
		<article className={`card card--${socialNetworkName}`}>
			<h3 className="card__heading">
				<img
					src={`src/assets/images/icon-${socialNetworkName}.svg`}
					alt={`${socialNetworkName} icon`}
					className="card__icon"
				/>
				{username}
			</h3>
			<span className="card__num-followers">{numFollowers}</span>
			<span className="card__type-followers">{typeFollowers}</span>
			<span
				className={`card__growth-today card__growth-today--${
					growthPositive ? "positive" : "negative"
				}`}
			>
				<img
					src={`src/assets/images/icon-${growthPositive ? "up" : "down"}.svg`}
					alt={`${socialNetworkName} icon`}
				/>
				{growthToday} Today
			</span>
		</article>
	);
};

export default Card;
