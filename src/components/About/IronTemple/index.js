import React from 'react';
import family from '../../../assets/images/family.jpg';
import './style.css';

export const IronTemple = () => {
	return (
		<div id="about-iron-temple">
			<h1>Iron Temple</h1>
			<div>
				<p>
					lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum.
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
