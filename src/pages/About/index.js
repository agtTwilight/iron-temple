import React, { useEffect, useState } from 'react';
import Facilities from '../../components/About/Facilities';
import IronTemple from '../../components/About/IronTemple';
import Team from '../../components/About/Team';
import './style.css';

const About = () => {
	const [navValue, setNavValue] = useState('about');
	const [viewComponent, setViewComponent] = useState(<IronTemple />);
	return (
		<div>
			<nav id="about-nav">
				<h3 onClick={setViewComponent(<IronTemple />)}>About</h3>
				<h3 onClick={setViewComponent(<Team />)}>Our Team</h3>
				<h3 onClick={setViewComponent(<Facilities />)}>Our Facilities</h3>
			</nav>
			{viewComponent}
		</div>
	);
};

export default About;
