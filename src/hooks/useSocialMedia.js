import { useContext } from "react";
import SocialMediaContext from "../context/SocialMediaContext";

const useSocialMedia = () => {
	return useContext(SocialMediaContext);
};

export default useSocialMedia;
