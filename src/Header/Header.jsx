import React from "react";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        duration={500}
        style={{ display: "flex", alignItems: "center" }}
      >
        <span className="nav-item-home">
          <img src="images/earth.png" className="earth" alt="earth" />
          <span className="nav-item-home-text">Jurian Vink</span>
        </span>
      </Link>
      <div className="right">
        <ul className="nav-wrapper">
          <li className="nav-item">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
