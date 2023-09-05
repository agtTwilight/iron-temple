import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/memberships"></Route>
				<Route path="/store"></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
