import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import earth from './earth.png';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link className="link-no-style left" to="/">
                    <img src={earth} className="earth" alt="earth" />
                    <span>Jurian Vink</span>
                </Link>
                <div className="right">
                    <ul className="nav-wrapper">
                        <Link className="link-no-style" to="/about"><span className="nav-link">About me</span></Link>
                        <Link className="link-no-style" to="/projects"><span className="nav-link">My Projects</span></Link>
                        <Link className="link-no-style" to="/contact"><span className="nav-link">Contact</span></Link>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;