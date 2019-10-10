import React from "react";
import LinkedIn from "mdi-react/LinkedinBoxIcon";
import GitHub from "mdi-react/GithubCircleIcon";
import At from "mdi-react/AtIcon";
import "./Contact.css";

const About = () => {
  return (
    <div id="contact">
      <div className="social-media">
        <a
          className="icon-text"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/jurian-vink-282465141/"
        >
          <LinkedIn className="icon" />
          <span>LinkedIn</span>
        </a>
        <a
          className="icon-text"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/jvink/"
        >
          <GitHub className="icon" />
          <span>Github</span>
        </a>
        <a
          className="icon-text"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:jurian.vnk@gmail.com?Subject=Contact"
        >
          <At className="icon" />
          <span>Email</span>
        </a>
      </div>
    </div>
  );
};

export default About;
