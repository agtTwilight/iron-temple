import React, { useEffect, useState } from 'react';
import Facilities from '../../components/About/Facilities';
import IronTemple from '../../components/About/IronTemple';
import Team from '../../components/About/Team';
import './style.css';

const About = () => {
	const [navValue, setNavValue] = useState('about');
	const [viewComponent, setViewComponent] = useState(<IronTemple />);

	useEffect(() => {
		let nav = document.getElementById('about-nav');
		for (const child of nav.children) {
			child.classList.remove('active-nav');
		}

		document.getElementById(`nav-${navValue}`).classList.add('active-nav');
	}, [navValue]);

	const navHandler = (navVal) => {
		if (navVal !== navValue) {
			setNavValue(navVal);
			if (navVal === 'about') {
				setViewComponent(<IronTemple />);
			} else if (navVal === 'team') {
				setViewComponent(<Team />);
			} else if (navVal === 'facilities') {
				setViewComponent(<Facilities />);
			}
		}
	};
	return (
		<div>
			<nav id="about-nav">
				<h3 id="nav-about" onClick={() => navHandler('about')}>
					About
				</h3>
				<h3 id="nav-team" onClick={() => navHandler('team')}>
					Our Team
				</h3>
				<h3 id="nav-facilities" onClick={() => navHandler('facilities')}>
					Our Facilities
				</h3>
			</nav>
			{viewComponent}
		</div>
	);
};

export default About;
