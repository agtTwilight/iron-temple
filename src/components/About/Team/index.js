import React from 'react';
import wascarAndCydnee from '../../../assets/images/wascar+cydnee-staff.jpg';
import lindsay from '../../../assets/images/lindsay-staff.jpg';
import austin from '../../../assets/images/austin-staff.jpg';
import meghan from '../../../assets/images/meghan-staff.jpg';

import TeamMemberProfile from '../../TeamMemberProfile';
import './style.css';

export const Team = () => {
	// Example of team member data format necssary for TeamMemberProfile component
	const testData = [
		{
			img: wascarAndCydnee,
			name: 'Wascar Carpio & Cydnee Carpio',
			position: 'Owners',
			about:
				'Bio coming soon!',
		},
		{
			img: lindsay,
			name: 'Lindsay Richman',
			position: 'General Manager',
			about:
				`You may have seen Lindsay leading the team of spotters and loaders for Washington State Powerlifting meets, or maybe even saw her give you a red light while competing. 
				It is with great pleasure that we introduce Iron Temple's General Manager, Lindsay Richman! 
				Lindsay has been powerlifting for about 9 years. She loves everything about powerlifting - from the community to the volunteering. 
				If you don't see her at the gym, she is probably at home baking something. Married to her husband, Curt, for 13 years, she has 3 daughters: Remi, Erin, and Lily!`,
		},
		{
			img: austin,
			name: 'Austin Flynn',
			position: 'Media',
			about: 'Bio coming soon!'
		},
		{
			img: meghan,
			name: 'Dr. Meghan Sak-Ocbina',
			position: 'Physical Therapist',
			about:
				'Meghan is a board-certified Physical Therapist, Athletic Trainer, Certified Strength & Conditioning Specialist, and the owner of Impetus Movement and Rehab, PLLC. Dr. Meghan received her Doctorate of Physical Therapy from Baylor Univeristy and Masters of Athletic Training from the University of Arkansas. Meghan has always had a movement and load-focused approach to rehabilitation and firmly believes rehab should be considered "training with injury". Her own movement practice is influenced by sports performance, corrective exercise, bodybuilding, powerlifting, hardstyle kettlebell training, and calisthenics. She has a strong passion for educating and empowering her clients to feel strong, capable, and confident in their bodies throughout their lifespan.',
		},
	];
	return (
		<div>
			<h1>Our Team</h1>
			{/* Example of how data must be injected into TeamMemberProfile component for proper rendering */}
			{testData.map((teamMember) => {
				return (
					<TeamMemberProfile
						img={teamMember.img}
						name={teamMember.name}
						position={teamMember.position}
						about={teamMember.about}
					/>
				);
			})}
		</div>
	);
};

export default Team;
