import { createContext, useState } from "react";

const SocialMediaContext = createContext();

const initialSocialMediaStats = {
	totalFollowers: "23,004",
	socialMedia: [
		{
			name: "facebook",
			username: "@nathanf",
			totalFollowers: "1987",
			typeFollowers: "followers",
			followersToday: 12,
		},
		{
			name: "twitter",
			username: "@nathanf",
			totalFollowers: "1044",
			typeFollowers: "followers",
			followersToday: 99,
		},
		{
			name: "instagram",
			username: "@realnathanf",
			totalFollowers: "11k",
			typeFollowers: "followers",
			followersToday: 1099,
		},
		{
			name: "youtube",
			username: "Nathan F.",
			totalFollowers: "8239",
			typeFollowers: "subscribers",
			followersToday: -144,
		},
	],
	overviewToday: [
		{
			name: "facebook",
			title: "Page Views",
			number: "87",
			percentage: 12,
		},
		{
			name: "facebook",
			title: "Likes",
			number: "52",
			percentage: -2,
		},
		{
			name: "instagram",
			title: "Likes",
			number: "5462",
			percentage: 2257,
		},
		{
			name: "instagram",
			title: "Profile Views",
			number: "52k",
			percentage: 1375,
		},
		{
			name: "twitter",
			title: "Retweets",
			number: "117",
			percentage: 303,
		},
		{
			name: "twitter",
			title: "Likes",
			number: "507",
			percentage: 553,
		},
		{
			name: "youtube",
			title: "likes",
			number: "107",
			percentage: -19,
		},
		{
			name: "youtube",
			title: "Total Views",
			number: "1407",
			percentage: -12,
		},
	],
};

const SocialMediaProvider = ({ children }) => {
	const [socialMediaStats, setSocialMediaStats] = useState(
		initialSocialMediaStats
	);

	return (
		<SocialMediaContext.Provider value={socialMediaStats}>
			{children}
		</SocialMediaContext.Provider>
	);
};

export { SocialMediaProvider };
export default SocialMediaContext;
