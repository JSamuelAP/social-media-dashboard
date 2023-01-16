import useSocialMedia from "../hooks/useSocialMedia";
import Card from "./Card";
import CardToday from "./CardToday";

const MainContent = () => {
	const { socialMedia, overviewToday } = useSocialMedia();

	return (
		<main class="main">
			<div className="container">
				<section className="social-media">
					<div className="grid social-media__grid">
						{socialMedia.map((item) => {
							const {
								name,
								username,
								totalFollowers,
								typeFollowers,
								followersToday,
							} = item;

							return (
								<Card
									key={name}
									data={{
										socialMedia: name,
										username,
										numFollowersTotal: totalFollowers,
										followersText: typeFollowers,
										numFollowersToday: followersToday,
									}}
								/>
							);
						})}
					</div>
				</section>
				<section className="overview">
					<h2 className="overview__heading">Overview - Today</h2>
					<div className="grid overview__grid">
						{overviewToday.map((item, index) => {
							const { title, name, number, percentage } = item;

							return (
								<CardToday
									key={index}
									data={{
										title,
										icon: name,
										number,
										percentage,
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
