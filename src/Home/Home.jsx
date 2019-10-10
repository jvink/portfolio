import React from "react";
import { Link } from "react-scroll";
import "./Home.css";

const App = () => {
  return (
    <div className="wrapper" id="home">
      <div className="front-page-wrapper">
        <div className="introduction">
          <span style={{ fontSize: 24, marginBottom: "1em" }}>
            Welcome! My name is Jurian Vink,
          </span>
          <span style={{ fontSize: 18, lineHeight: "30px" }}>
            I am a passionate React developer with a sense of design and a
            passion for making valuable, (re)usable and beautiful software using
            clean code!
          </span>

          <div style={{ marginTop: "2.5em" }}>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              style={{ marginRight: "2em" }}
            >
              <span id="button-style">ABOUT</span>
            </Link>
            <Link to="contact" spy={true} smooth={true} duration={1000}>
              <span id="button-style">CONTACT</span>
            </Link>
          </div>
        </div>
        <div className="content">
          <div id="circle-orbit-container">
            <img src="images/planet.png" className="planet" alt="planet" />
            <div id="outer-orbit">
              <div className="outer-orbit-cirlces"></div>
            </div>
            <div id="middle-orbit">
              <div className="middle-orbit-cirlces"></div>
            </div>
            <div id="inner-orbit">
              <div className="inner-orbit-cirlces"></div>
              <img
                src="images/spaceship.png"
                className="inner-orbit-cirlces"
                alt="satellite"
                style={{ width: "1.5em", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
