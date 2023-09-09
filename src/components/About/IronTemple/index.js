import React from 'react';
import family from '../../../assets/images/family.jpg';
import './style.css';

export const IronTemple = () => {
	return (
		<div id="about-iron-temple">
			<h1>Iron Temple</h1>
			<div>
				<p>
					Located in Puyallup, Washington, our privately owned gym offers state-of-the-art equipment. We are the ultimate destinatino for bodybuilding, powerlifting, or general health and fitness. From seasoned athletes to beginners, everyone is welcome here.
					<br></br>
					With expert trainers, a vibrant fitness community, and a commitment to cleanliness and inclusivity, Iron Temple Gym is the place where your fitness journey transforms into greatness.
					<br></br>
					Join us today and unleash your potential in a safe, inspiring environment.
					<br></br>
					Welcome to the Iron Temple family!
				</p>
				<img
					id="family-img"
					src={family}
					alt="Wascar (the owner of Iron Temple) with his wife and kid."
				></img>
			</div>
			<hr></hr>
			<h2>What next?</h2>
			<p>
				Find out about our team and facilities, or sign up for a membership
				today!
			</p>
			<section id="about-buttons">
				<button>Team</button>
				<button>Facilities</button>
				<button>Join Now!</button>
			</section>
		</div>
	);
};

export default IronTemple;
