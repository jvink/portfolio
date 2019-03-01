import React, { Component } from 'react';
import earth from './earth.png';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <a className="link-no-style left" href="/">
                    <img src={earth} className="earth" alt="earth" />
                    <span>Jurian Vink</span>
                </a>
                <div className="right">
                    <ul className="nav-wrapper">
                        <a className="link-no-style" href="/about"><span className="nav-link">About me</span></a>
                        <a className="link-no-style" href="/projects"><span className="nav-link">My Projects</span></a>
                        <a className="link-no-style" href="/contact"><span className="nav-link">Contact</span></a>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;