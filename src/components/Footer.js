import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../assets/images/head-gear.svg';
import contactIcon from '../assets/images/contact.svg';
import speakIcon from '../assets/images/speak.svg';
import 'styles/Footer.css';

function Footer() {
    return (
        <footer className="Footer">
            <nav className="Footer-nav">
                <ul>
                    <li>
                        <Link to="/">
                            <img src={homeIcon} alt="HeadGear" className="nav-icon" />
                            <span className="nav-label">Who I Am</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/myviews">
                            <img src={speakIcon} alt="speakIcon" className="nav-icon" />
                            <span className="nav-label">Society Speaks</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            <img src={contactIcon} alt="Contact" className="nav-icon" />
                            <span className="nav-label">Let's Connect</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;