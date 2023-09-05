import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import welcomeIMG from '../../assets/images/eleiko-plates.jpg';
import './style.css';

const Home = () => {
	return (
		<div>
			<Container id="home-content">
				<Row>
					<Col id="welcome-statement">
						<p>
							lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</p>
						<button id="join-btn">Join now!</button>
					</Col>
					<Col>
						<img
							id="welcome-img"
							src={welcomeIMG}
							alt="25kg Eleiko plates on a weight tree."
						></img>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default Home;
