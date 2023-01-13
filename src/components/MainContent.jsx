import Card from "./Card";
import CardToday from "./CardToday";

const MainContent = () => {
	return (
		<main class="main">
			<div className="container">
				<section className="social-media">
					<div className="grid social__media-grid">
						<Card
							data={{
								socialMedia: "facebook",
								username: "@nathanf",
								numFollowersTotal: "1987",
								followersText: "Followers",
								numFollowersToday: 12,
							}}
						/>
						<Card
							data={{
								socialMedia: "twitter",
								username: "@nathanf",
								numFollowersTotal: "1044",
								followersText: "Followers",
								numFollowersToday: 99,
							}}
						/>
						<Card
							data={{
								socialMedia: "instagram",
								username: "@realnathanf",
								numFollowersTotal: "11k",
								followersText: "Followers",
								numFollowersToday: 1099,
							}}
						/>
						<Card
							data={{
								socialMedia: "youtube",
								username: "Nathan F.",
								numFollowersTotal: "8239",
								followersText: "Subscribers",
								numFollowersToday: -144,
							}}
						/>
					</div>
				</section>
				<section className="overview">
					<h2 className="overview__heading">Overview - Today</h2>
					<div className="grid overview__grid">
						<CardToday
							data={{
								title: "Page Views",
								icon: "facebook",
								number: "87",
								percentage: 3,
							}}
						/>
						<CardToday
							data={{
								title: "Likes",
								icon: "facebook",
								number: "52",
								percentage: 2,
							}}
						/>
						<CardToday
							data={{
								title: "Likes",
								icon: "instagram",
								number: "5462",
								percentage: 2257,
							}}
						/>
						<CardToday
							data={{
								title: "Profile Views",
								icon: "instagram",
								number: "52k",
								percentage: 1375,
							}}
						/>
						<CardToday
							data={{
								title: "Retweets",
								icon: "twitter",
								number: "117",
								percentage: 303,
							}}
						/>
						<CardToday
							data={{
								title: "Likes",
								icon: "twitter",
								number: "507",
								percentage: 553,
							}}
						/>
						<CardToday
							data={{
								title: "Likes",
								icon: "youtube",
								number: "107",
								percentage: -19,
							}}
						/>
						<CardToday
							data={{
								title: "Total Views",
								icon: "youtube",
								number: "1407",
								percentage: -12,
							}}
						/>
					</div>
				</section>
			</div>
		</main>
	);
};

export default MainContent;
