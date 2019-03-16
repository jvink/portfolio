import React from 'react';
import moment from 'moment';
import './About.css';
import ik from './ik.jpg';

class About extends React.Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="content-left">
                    <p>
                        <h2>Introduction</h2>
                        Hi there, my name is Jurian Vink. I am a {moment("1998-09-28").toNow(true)} old student, living in the Netherlands. As you might guess, one of my hobbies is programming. I love making things out of nothing, 
                        and ending up with a beautiful product I can be proud of. Front-end development is something I like doing the most. Although, the combination of developing back-end features and implementing this in the front-end
                        is even better, because you will have much more knowledge of what is going on, than if someone else would develop the back-end feature.                        
                        <br/><br/>
                        More hobbies of mine are gaming, hanging out with friends and fitness. I usually visit the gym about 4 to 5 times a week. It is most satisfying after programming and thinking the whole day, just to clear your mind.
                        <br/><br/>
                        I am in my second year of my study Computer Science at Hogeschool Rotterdam. This study is about programming, analysing, setting up requirements and communication with all the parties involved.
                        <br/><br/>
                        <h2>Experience</h2>
                        I achieved most of my experience at my current work, <a style={{color: 'green'}} href="https://gdksoftware.nl/" rel="noopener noreferrer" target="_blank">GDK Software</a>. 
                        The employees were experienced programmers who teached me fundemental industry coding standards, object orientated programming, advanced programming patterns, working in agile and teamwork. 
                        <br/>
                        I have participated in smaller up to larger scaled projects for all sorts of customers.
                        <br/><br/>
                        <h2>Skills</h2>
                        <div>
                            <div style={{border: '2px dotted', borderRadius: '12px', margin: '1em'}}>
                                <div style={{width: '95%', backgroundColor: '#0652DD', textIndent: '1em', padding: '8px', borderRadius: '10px'}}>React</div>
                            </div>
                            <div style={{border: '2px dotted', borderRadius: '12px', margin: '1em'}}>
                                <div style={{width: '90%', backgroundColor: '#0652DD', textIndent: '1em', padding: '8px', borderRadius: '10px'}}>React Native</div>
                            </div>
                            <div style={{border: '2px dotted', borderRadius: '12px', margin: '1em'}}>
                                <div style={{width: '65%', backgroundColor: '#0652DD', textIndent: '1em', padding: '8px', borderRadius: '10px'}}>Angular</div>
                            </div>
                            <div style={{border: '2px dotted', borderRadius: '12px', margin: '1em'}}>
                                <div style={{width: '93%', backgroundColor: '#0652DD', textIndent: '1em', padding: '8px', borderRadius: '10px'}}>NodeJS</div>
                            </div>
                            <div style={{border: '2px dotted', borderRadius: '12px', margin: '1em'}}>
                                <div style={{width: '98%', backgroundColor: '#0652DD', textIndent: '1em', padding: '8px', borderRadius: '10px'}}>HTML/CSS</div>
                            </div>
                            <div style={{border: '2px dotted', borderRadius: '12px', margin: '1em'}}>
                                <div style={{width: '80%', backgroundColor: '#0652DD', textIndent: '1em', padding: '8px', borderRadius: '10px'}}>UX Design</div>
                            </div>
                            <div style={{border: '2px dotted', borderRadius: '12px', margin: '1em'}}>
                                <div style={{width: '80%', backgroundColor: '#0652DD', textIndent: '1em', padding: '8px', borderRadius: '10px'}}>Databases</div>
                            </div>
                        </div>
                </p>
                </div>
                <div className="content-right">
                    <img src={ik} alt="ik" style={{maxWidth: '500px', borderRadius: '100%'}}/>
                    <h1>Jurian Vink</h1>
                    <h3>Junior Software Developer</h3>
                    <h4>at GDK Software</h4>
                </div>
            </div>
        );
    }
}

export default About;