import React, { Component } from 'react';
import Header from './Header/Header';
import planet from './planet.png';
import satellite from './satellite.png';
import spaceship from './spaceship.png';
import './App.css';

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
              <button>Get to know me more</button>
              <button>Check out my projects</button>
            </div>
          </div>
          <div className="content">
            <div id="circle-orbit-container">
              <img src={planet} className="planet" alt="planet" />
              <div id="inner-orbit">
                <div class="inner-orbit-cirlces"></div>
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
