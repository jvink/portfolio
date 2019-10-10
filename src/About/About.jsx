import React from "react";
import moment from "moment";
import "./About.css";

const About = () => {
  return (
    <div id="about">
      <div className="content-left">
        <div>
          <img src="images/dordrecht.png" alt="Dordrecht" />
        </div>
      </div>
      <div className="content-right">
        <div className="outer-column" />
        <div className="about-me">
          <h5>Something about me</h5>
          <p className="about-me-text">
            My name is Jurian Vink, a {moment("1998-09-28").toNow(true)} year
            old student, living in my beautiful home town Dordrecht, the
            Netherlands. React enthousiast, but actually anything with
            Javascript. I like gaming, hanging out with friends, fitness, you
            name it. Currently in my third year of part-time study Computer
            Science at Hogeschool Rotterdam.
          </p>
        </div>
        <div className="outer-column" />
      </div>
    </div>
  );
};

export default About;
