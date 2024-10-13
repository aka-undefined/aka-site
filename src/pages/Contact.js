import React from 'react';
import '../styles/Contact.css';

function Contact() {
    return (
        <div className="Contact">
            <h1>Feel free to reach out</h1>
            <ul>
                <li>Email: <a href="mailto:arunrgcet@gmail.com">arunrgcet@gmail.com</a></li>
                <li>Phone: <a href="tel:+91 9741163046">+91 9741163046</a></li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/arun-kumar-anguraja" target="_blank" rel="noopener noreferrer">arun-kumar-anguraja</a></li>
                <li>X: <a href="https://x.com/arun_anguraja" target="_blank" rel="noopener noreferrer">arun_anguraja</a></li>
            </ul>
        </div>
    );
}

export default Contact;