import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
	return (
		<ThemeProvider>
			<Header />
			<MainContent />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
