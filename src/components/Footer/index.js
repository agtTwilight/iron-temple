import React from 'react';
import Contact from '../Contact';
// import facebook from './assets/facebook.png';
import './style.css';

export const Footer = () => {
	return (
		<footer id="footer-control">
			<section id="footer">
				<section id="footer-left">
					<h2>Address</h2>
					<a
						href="https://www.google.com/search?q=the+iron+temple+gym"
						target="_blank"
						rel="noreferrer"
					>
						<p className="footer-content">
							14205 Meridian Ave E <br></br>Puyallup, WA 98373
						</p>
					</a>
					<h2>Hours</h2>
					<p className="footer-content">
						Monday - Sunday
						<br></br>10:00 AM - 08:00 PM
						<br></br><br></br>Members
						<br></br>24/7 Access
					</p>
					{/* <h2>Phone</h2>
					<p className="footer-content">(206) XXX-XXXX</p> */}
					<a
						href="https://www.facebook.com/luuscafe/"
						target="_blank"
						rel="noreferrer"
					>
						{/* <img
							id="facebook-footer"
							src={facebook}
							alt="the facebook logo"
						></img> */}
					</a>
				</section>
				<section id="footer-right">
					<Contact />
				</section>
				<hr></hr>
			</section>
		</footer>
	);
};

export default Footer;
