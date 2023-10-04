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
				`Wascar is the 2023 IPF World Championo powerlifter for the 130lb/59kg weight class. He currently holds the second highest total ever done in the world for that weight class. He has been powerlifting for 3 years now and has developed a passion for powerlifting and health and fitness. He is married to his beautiful wife, Cydnee, and now has a boy who is 2 years old! Outside of powerlifting, Wascar loves the outdoors which includes hiking, camping, and walks!`,
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
			about: `You've probably seen him either with a camera, barbell, or a tool in his hands, maybe even all three at once! Austin has been in the powerlifting community since 2016, when his lifting career began at the YMCA. Heh has been professionally capturing photos for rjust over 5 years and working on videography for almost 2 years. He has always been a huge fan of seeing people win, so documenting those moments was a clear choice. Happily engaged and a fur dad of 4, Austin spends his time developing his craft, finding new places to eat, and spending time with his loved ones! Anytime you need a resource to capture and create the next level of content for your social media, stop by and have a chat with him or send him a DM on instagram!`
		},
		{
			img: meghan,
			name: 'Dr. Meghan Sak-Ocbina',
			position: 'Physical Therapist',
			about:
				`Meghan is a board-certified Physical Therapist, Athletic Trainer, Certified Strength & Conditioning Specialist, and the owner of Impetus Movement and Rehab, PLLC. Dr. Meghan received her Doctorate of Physical Therapy from Baylor Univeristy and Masters of Athletic Training from the University of Arkansas. Meghan has always had a movement and load-focused approach to rehabilitation and firmly believes rehab should be considered "training with injury". Her own movement practice is influenced by sports performance, corrective exercise, bodybuilding, powerlifting, hardstyle kettlebell training, and calisthenics. She has a strong passion for educating and empowering her clients to feel strong, capable, and confident in their bodies throughout their lifespan.`,
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
