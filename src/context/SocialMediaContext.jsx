import { createContext, useState } from "react";

const SocialMediaContext = createContext();

const initialSocialMediaStats = {
	totalFollowers: "23,004",
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
