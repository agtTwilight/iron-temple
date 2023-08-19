import React from 'react';
import './style.css';

export const TeamMemberProfile = (props) => {
	return (
		<div className="team-member">
			<img
				className="team-member-image"
				src={props.img}
				alt="team memeber profile"
			></img>
			<section>
				<h2 className="team-member-info">
					<strong>{`${props.position.toUpperCase()} - ${props.name.toUpperCase()}`}</strong>
				</h2>
				<p className="team-member-description">{props.about}</p>
			</section>
		</div>
	);
};

export default TeamMemberProfile;
