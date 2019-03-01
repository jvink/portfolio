import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Home} />
        </Switch>
    </main>
);

export default Main;