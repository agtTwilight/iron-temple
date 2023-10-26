import React, { useEffect, useState } from "react";
import HomeContent from "../../components/Home-Content";
import tourVid from "../../assets/videos/gym-tour.mp4";
import "./style.css";

function getWindowWidth() {
	const { innerWidth: width } = window;
	return {
		width
	};
}

function useWindowWidth() {
	const [windowWidth, setWindowWidth] = useState(
		getWindowWidth()
	);

	useEffect(() => {
		function handleResize() {
			setWindowWidth(getWindowWidth());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowWidth;
}
const Home = () => {
	const { width } = useWindowWidth();
	return (
		<>
			{width >= 990 ? (
				<div className="background">
					<div className="overlay"></div>
					<video src={tourVid} autoPlay loop muted />
					<HomeContent />
				</div>
			) : (
				<div className="background">
					<HomeContent />
				</div>
			)}
		</>
	)
};

export default Home;
