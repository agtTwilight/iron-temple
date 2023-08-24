// import React, { useRef } from "react";
// import emailjs from '@emailjs/browser';

// export const Footer = () => {
//     const form = useRef();

//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs.sendForm('service_one4vdd', 'template_tniigpf', form.current, 'JxncV2Nalp39tFTfo')
//             .then((result) => {
//                 alert("Your email has been sent!");
//                 e.target.reset();
//                 console.log(result.text);
//             }, (error) => {
//                 console.log(error.text);
//             });
//     };

//     return (
//         <section className="contact-container">
//             <form className="contact-me" ref={form} onSubmit={sendEmail}>

//                 <label className="contact-label">Full Name:</label>
//                 <input className="contact-inputs" type="text" name="user_name" />

//                 <label className="contact-label">Email:</label>
//                 <input className="contact-inputs" type="email" name="user_email" />

//                 <label className="contact-label">Message:</label>
//                 <textarea className="contact-inputs" name="message" />

//                 <input className="send-btn" type="submit" value="Send" />
//             </form>
//         </section>
//     );
// };

// export default Footer;
