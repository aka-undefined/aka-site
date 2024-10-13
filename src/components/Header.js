import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/@aka_313.png';
import homeIcon from '../assets/images/head-gear.svg';
import contactIcon from '../assets/images/contact.svg';
import speakIcon from '../assets/images/speak.svg';
import 'styles/Header.css';

function Header() {
    return (
        <header className="Header">
            <img src={logo} className="Header-logo" alt="logo" />
            <nav className="Header-nav">
                <ul>
                    <li>
                        <Link to="/">
                            <img src={homeIcon} alt="HeadGear" className="nav-icon" />
                            <span className="nav-label">Who I Am</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/myviews">
                            <img src={speakIcon} alt="About" className="nav-icon" />
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
        </header>
    );
}

export default Header;