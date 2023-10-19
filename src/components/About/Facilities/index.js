import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// import eleikoBar from '../../assets/images/eleiko-bar.jpg';
// import eleikoBench from '../../assets/images/eleiko-pad.jpg';
// import eleikoPlates from '../../assets/images/eleiko-plates.jpg';
// import eleikoRack from '../../assets/images/eleiko-rack.jpg';

import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem } from 'react-bootstrap';
import './style.css';

export const Facilities = () => {
	return (
		<div>
			<h1>Facilities</h1>

			<Container>
				<Row>
					<h2 className="equipment-header">Bodybuilding Equipment: Arsenal Strength</h2>
					<Col>
						<ul>
							<li>M1 Basic Trainer 8 Station Cables</li>
							<li>M1 Selectorized Seated Leg Extension Machine</li>
							<li>M1 Selectorized Lying Leg Curl</li>
							<li>M1 Selectorized Inner/Outer Thigh</li>
							<li>M1 Selectorized Pec Fly/Rear Delt</li>
							<li>Arsenal Reloaded Bilateral Leg Press</li>
							<li>Arsenal Reloaded Linear Hack Squat</li>
						</ul>
					</Col>
					<Col>
						<ul>
							<li>Arsenal Reloaded ISO Multi Row</li>
							<li>Arsenal Reloaded Vertical Chest Press</li>
							<li>Alpha 45 Degree Back Extension</li>
							<li>Custom Dumbbells: 5LBS - 150LBS (5LB Increments)</li>
							<li>Custom Easy Bars: 20LBS - 110LBS (10LB Increments)</li>
							<li>Custom Straight Bars: 20LBS - 110LBS (10LB Increments)</li>
							<li>Turf 7.5FT Wide X 30FT Long</li>
						</ul>
					</Col>
				</Row>
				<Row>
					<h2 className="equipment-header">Powerlifting Equipment</h2>
					<Col>
						<ul>
							<li>3 Eleiko Powerlifting Combo Racks</li>
							<li>3 Sets of Eleiko Calibrated Plates</li>
							<li>6 Eleiko 20KG Power Bars</li>
							<li>1 Ghost Competition Bench</li>
							<li>3 Rogue 45LB Bars</li>
							<li>1 Texas Squat Bar</li>
						</ul>
					</Col>
					<Col>
						<ul>
							<li>1 Texas Deadlift Bar</li>
							<li>1 Kabuki Deadlift Bar</li>
							<li>3 Deadlift Platforms</li>
							<li>2 Giant Squat Cages</li>
							<li>Rogue Pit Shark</li>
						</ul>
					</Col>
				</Row>
				<h2 className="equipment-header">Cardio Equipment</h2>
				<Col>
					<ul>
						<li>2 Treadmills</li>
						<li>1 Elliptical</li>
						<li>1 Stairmaster</li>
						<li>1 Rogue Air Bike</li>
					</ul>
				</Col>
			</Container>
		</div>
	);
};

export default Facilities;
