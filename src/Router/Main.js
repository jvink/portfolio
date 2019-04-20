import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import ProjectDetail from '../ProjectDetail/ProjectDetail';
import About from '../About/About';
import Contact from '../Contact/Contact';
import CurriculumVitae from '../CurriculumVitae/CurriculumVitae';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:projectid" component={ProjectDetail} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/cv" component={CurriculumVitae} />
    </Switch>
);

export default Main;