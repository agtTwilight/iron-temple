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
				'Bio coming soon!',
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
				'Bio coming soon!',
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
