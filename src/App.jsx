import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { SocialDataProvider } from "./context/SocialDataContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
	return (
		<ThemeProvider>
			<SocialDataProvider>
				<Header />
				<MainContent />
				<Footer />
			</SocialDataProvider>
		</ThemeProvider>
	);
}

export default App;
