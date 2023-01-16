import { createContext, useState } from "react";

const SocialDataContext = createContext();

const initialSocialStats = {
	totalFollowers: "23,004",
	socialMediaStats: [
		{
			name: "facebook",
			username: "@nathanf",
			numFollowers: "1987",
			typeFollowers: "followers",
			growthToday: 12,
		},
		{
			name: "twitter",
			username: "@nathanf",
			numFollowers: "1044",
			typeFollowers: "followers",
			growthToday: 99,
		},
		{
			name: "instagram",
			username: "@realnathanf",
			numFollowers: "11k",
			typeFollowers: "followers",
			growthToday: 1099,
		},
		{
			name: "youtube",
			username: "Nathan F.",
			numFollowers: "8239",
			typeFollowers: "subscribers",
			growthToday: -144,
		},
	],
	overviewTodayStats: [
		{
			name: "facebook",
			title: "Page Views",
			number: "87",
			growthPercentage: 12,
		},
		{
			name: "facebook",
			title: "Likes",
			number: "52",
			growthPercentage: -2,
		},
		{
			name: "instagram",
			title: "Likes",
			number: "5462",
			growthPercentage: 2257,
		},
		{
			name: "instagram",
			title: "Profile Views",
			number: "52k",
			growthPercentage: 1375,
		},
		{
			name: "twitter",
			title: "Retweets",
			number: "117",
			growthPercentage: 303,
		},
		{
			name: "twitter",
			title: "Likes",
			number: "507",
			growthPercentage: 553,
		},
		{
			name: "youtube",
			title: "likes",
			number: "107",
			growthPercentage: -19,
		},
		{
			name: "youtube",
			title: "Total Views",
			number: "1407",
			growthPercentage: -12,
		},
	],
};

const SocialDataProvider = ({ children }) => {
	const [socialStats] = useState(initialSocialStats);

	return (
		<SocialDataContext.Provider value={socialStats}>
			{children}
		</SocialDataContext.Provider>
	);
};

export { SocialDataProvider };
export default SocialDataContext;
