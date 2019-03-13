import React from 'react';
import moment from 'moment';

class About extends React.Component {
    render() {
        return (
            <div className="content-wrapper">
                <p>
                    <h2>Introduction</h2>
                    Hi there, my name is Jurian Vink. I am a {moment("1998-09-28").toNow(true)} old student, living in the Netherlands.
                    <br/>
                    I am in my second year of my study Computer Science at Hogeschool Rotterdam. This study is about programming, analysing, setting up requirements and communication all the parties involved.
                    <br/>
                    <h2>Experience</h2>
                    I achieved most of my experience at my current work, <a style={{color: 'green'}} href="https://gdksoftware.nl/" target="_blank">GDK Software</a>. 
                    The employees were experienced programmers who teached me fundemental industry coding standards, object orientated programming, advanced programming patterns, working in agile and teamwork. 
                    <br/>
                    I have participated in smaller up to larger scaled projects for all sorts of customers.
                </p>
            </div>
        );
    }
}

export default About;