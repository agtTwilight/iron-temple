import React from "react";
import { CarouselItem } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import family from "../../../assets/images/family.jpg";
import sendoff from "../../../assets/images/send-off-community.jpg";
import "./style.css";

export const IronTemple = () => {
	return (
		<div>
			<Container id="about-iron-temple">
				<Col>
					<p id="about-text">
						Located in Puyallup, Washington, our privately owned gym offers
						state-of-the-art equipment. We are the ultimate destination for
						bodybuilding, powerlifting, or general health and fitness. From seasoned
						athletes to beginners, everyone is welcome here.
						<br></br>
						<br></br>
						With expert trainers, a vibrant fitness community, and a commitment to
						cleanliness and inclusivity, Iron Temple Gym is the place where your fitness
						journey transforms into greatness.
						<br></br>
						<br></br>
						Join us today and unleash your potential in a safe, inspiring environment.
						<br></br>
						<br></br>
						Welcome to the Iron Temple family!
					</p>
					<a
						href="https://irontemple.gymmasteronline.com/portal/signup?session=.eJxNzEsKgCAQANC7zDrEmcZPXkYkK4RSKRdFdPdo1_7xbhhLbtPZ_Fi2GvKVIjjqIFUfYtzBASuhSaCVgqSCDo4W5nktS8rTWcGhHhgtomGhDRk7_MWXMRJj_7zXiR-T.ZPuGIg.6jWxN_EfrzfcK5J9I5rS81CAho8"
						target="_blank"
						rel="noreferrer"
					>
						<button id="join-btn">Join now!</button>
					</a>
				</Col>
				<Col>
					<Carousel fade>
						<CarouselItem>
							<img
								className="carousel-img-about"
								src={family}
								alt="Wascar (the owner of Iron Temple) with his wife and kid."
							></img>
						</CarouselItem>
						<CarouselItem>
							<img
								className="carousel-img-about"
								src={sendoff}
								alt="Image of the community who showed to to the IPF Worlds Send Off open gym."
							></img>
						</CarouselItem>
					</Carousel>
				</Col>
			</Container>
		</div>
	);
};

export default IronTemple;
