const Card = ({ data }) => {
	let {
		socialMedia,
		username,
		numFollowersTotal,
		followersText,
		numFollowersToday,
	} = data;

	const followersPositive = numFollowersToday > 0;
	numFollowersToday = Math.abs(numFollowersToday);

	return (
		<article className={`card card--${socialMedia}`}>
			<h3 className="card__heading">
				<img
					src={`src/assets/images/icon-${socialMedia}.svg`}
					alt={`${socialMedia} icon`}
					className="card__icon"
				/>
				{username}
			</h3>
			<span className="card__num-followers">{numFollowersTotal}</span>
			<span className="card__text-followers">{followersText}</span>
			<span
				className={`card__followers-today card__followers-today--${
					followersPositive ? "positive" : "negative"
				}`}
			>
				<img
					src={`src/assets/images/icon-${
						followersPositive ? "up" : "down"
					}.svg`}
					alt={`${socialMedia} icon`}
				/>
				{numFollowersToday} Today
			</span>
		</article>
	);
};

export default Card;
