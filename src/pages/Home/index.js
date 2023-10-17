import React, { useEffect, useState } from 'react';
import { CarouselItem } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import tourVid from '../../assets/videos/gym-tour.mp4'
import './style.css';

const Home = () => {
	return (
		<div>
			<video src={tourVid} />
			<Container id="home-content">
				<Row>
					<Col id="welcome-statement">
						<p id="welcome-font">
							<span id="welcome-text">Welcome to Iron Temple Gym!</span>
							<br></br>
							<br></br>
							We are thrilled to welcome all to Iron Temple and are excited to
							embark on a journey of health and fitness together! Our mission is
							simple: To create a unique community of like-minded individuals
							hungry to improve!
							<br></br>
							<br></br>
							Here at Iron Temple, you're not just joining a gym; you are
							joining a supportive and inspiring family that is dedicated to
							your success.
							{/* Whether you are a seasoned fitness enthusiast or just starting on your fitness journey, our doors are wide open to all who seek a path to improvement. */}
							<br></br>
							<br></br>
							At Iron Temple, you'll find the tools, the guidance, and the
							camaraderie needed to reach your goals. We believe that together,
							as a community, we can achieve more than we ever could alone. Join
							us in this exciting adventure towards a healthier, happier you!
							<br></br>
							<br></br>
							Welcome to Iron Temple, let's make strides towards greatness
							together!
						</p>
						<a
							href="https://irontemple.gymmasteronline.com/portal/signup?session=.eJxNzEsKgCAQANC7zDrEmcZPXkYkK4RSKRdFdPdo1_7xbhhLbtPZ_Fi2GvKVIjjqIFUfYtzBASuhSaCVgqSCDo4W5nktS8rTWcGhHhgtomGhDRk7_MWXMRJj_7zXiR-T.ZPuGIg.6jWxN_EfrzfcK5J9I5rS81CAho8"
							target="_blank"
							rel="noreferrer"
						>
							<button id="join-btn">Join now!</button>
						</a>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default Home;
