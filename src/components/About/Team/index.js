import React from 'react';
import testimg from '../../../assets/images/eleiko-bar.jpg';
import TeamMemberProfile from '../../TeamMemberProfile';
import './style.css';

export const Team = () => {
	const testData = [
		{
			img: testimg,
			name: 'Name1',
			position: 'Head Coach',
			about:
				'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
		},
		{
			img: testimg,
			name: 'Name2',
			position: 'Head Coach',
			about:
				'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
		},
		{
			img: testimg,
			name: 'Name3',
			position: 'Head Coach',
			about:
				'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
		},
	];
	return (
		<div>
			<h1>Our Team</h1>
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
