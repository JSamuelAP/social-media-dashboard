import Card from "./Card";

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
					<h2>Overview - Today</h2>
					<div className="grid overview__grid">
						<article>Page Views 87 3%</article>
						<article>Likes 52 2%</article>
						<article>Likes 5462 2257%</article>
						<article>Profile Views 52k 1375%</article>
						<article>Retweets 117 303%</article>
						<article>Likes 507 553%</article>
						<article>Likes 107 19%</article>
						<article>Total Views 1407 12%</article>
					</div>
				</section>
			</div>
		</main>
	);
};

export default MainContent;
