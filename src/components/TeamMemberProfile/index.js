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
				<br></br>
				<p className="team-member-description">{props.about}</p>
				<br></br>
				<p className="team-member-description">{props.about2}</p>
				<br></br>
				<p className="team-member-description">{props.about3}</p>
			</section>
		</div>
	);
};

export default TeamMemberProfile;
