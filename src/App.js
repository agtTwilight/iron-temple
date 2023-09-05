import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/memberships"></Route>
					<Route path="/store"></Route>
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
