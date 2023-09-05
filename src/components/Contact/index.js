import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import './style.css';

export const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				'service_zo7n8zv',
				'template_3qonnuo',
				form.current,
				'qAGcWm6fIZZLN4Dsa'
			)
			.then(
				(result) => {
					console.log(result.text);
					console.log('message sent');
					e.target.reset();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	const refOne = useRef(null);
	return (
		<section id="form-ref" ref={refOne}>
			<form id="contact-form" ref={form} onSubmit={sendEmail}>
				<section id="contact-top">
					<h2>Send us a message!</h2>
				</section>
				<section id="contact-inputs">
					<input
						id="input-name"
						type="text"
						name="user_name"
						placeholder="Your Name"
					/>
					<input
						id="input-email"
						type="email"
						name="user_email"
						placeholder="Your Email"
					/>
					<textarea
						id="input-message"
						name="message"
						placeholder="Your Message"
					/>
				</section>
				<input id="contact-btn" type="submit" value="Send" />
			</form>
		</section>
	);
};

export default Contact;
