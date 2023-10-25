import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
	return (
		<div className="App">
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="https://theirontemplegym.com/about" element={<About />}></Route>
					{/* <Route path="/store"></Route> */}
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
