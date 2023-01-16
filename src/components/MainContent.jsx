import useSocialData from "../hooks/useSocialMedia";
import Card from "./Card";
import CardToday from "./CardToday";

const MainContent = () => {
	const { socialMediaStats, overviewTodayStats } = useSocialData();

	return (
		<main className="main">
			<div className="container">
				<section className="social-media">
					<div className="grid social-media__grid">
						{socialMediaStats.map((socialNetwork) => {
							const {
								name,
								username,
								numFollowers,
								typeFollowers,
								growthToday,
							} = socialNetwork;

							return (
								<Card
									key={name}
									data={{
										socialNetworkName: name,
										username,
										numFollowers,
										typeFollowers,
										growthToday,
									}}
								/>
							);
						})}
					</div>
				</section>
				<section className="overview">
					<h2 className="overview__heading">Overview - Today</h2>
					<div className="grid overview__grid">
						{overviewTodayStats.map((socialNetwork, index) => {
							const { title, name, number, growthPercentage } = socialNetwork;

							return (
								<CardToday
									key={index}
									data={{
										title,
										icon: name,
										number,
										growthPercentage,
									}}
								/>
							);
						})}
					</div>
				</section>
			</div>
		</main>
	);
};

export default MainContent;
