import { useContext } from "react";
import SocialDataContext from "../context/SocialDataContext";

const useSocialData = () => {
	return useContext(SocialDataContext);
};

export default useSocialData;
