import GrowthArrow from "./GrowthArrow";

const Card = ({ data }) => {
	let {
		socialNetworkName,
		username,
		numFollowers,
		typeFollowers,
		growthToday,
	} = data;

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
			<GrowthArrow
				growth={growthToday}
				text={`${Math.abs(growthToday)} Today`}
				aditionalClassName={"card__growth-today"}
			/>
		</article>
	);
};

export default Card;
