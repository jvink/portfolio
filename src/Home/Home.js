import React, { Component } from 'react';
import Header from '../Header/Header';
import planet from './planet.png';
import spaceship from './spaceship.png';
import { Link } from 'react-router-dom';
import './Home.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <div className="front-page-wrapper">
          <div className="introduction">
            <span style={{fontSize: 26, marginBottom: '1em'}}>Welcome! My name is Jurian Vink,</span>
            <span style={{fontSize: 20, lineHeight: '30px', marginLeft: '.5em'}}>I am a passionate software developer with a sense of design
            and a passion for making valuable, (re)usable and beautiful software!</span>

            <div className="button-container">
              <Link to="/about" id="button-style">Get to know more</Link>
              <Link to="/projects" id="button-style">Check out my projects</Link>
            </div>
          </div>
          <div className="content">
            <div id="circle-orbit-container">
              <img src={planet} className="planet" alt="planet" />
              <div id="outer-orbit">
                <div className="outer-orbit-cirlces"></div>
              </div>
              <div id="middle-orbit">
                <div className="middle-orbit-cirlces"></div>
              </div>
              <div id="inner-orbit">
                <div className="inner-orbit-cirlces"></div>
                <img src={spaceship} className="inner-orbit-cirlces" alt="satellite" style={{width: '2em', height: 'auto'}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
