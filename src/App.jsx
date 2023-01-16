import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { SocialMediaProvider } from "./context/SocialMediaContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
	return (
		<ThemeProvider>
			<SocialMediaProvider>
				<Header />
				<MainContent />
				<Footer />
			</SocialMediaProvider>
		</ThemeProvider>
	);
}

export default App;
