import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import Header from './Header/Header';
import Main from './Router/Main';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div id="root">
                    <Header/>
                    <Main/>
                </div>
            </HashRouter>
        );
    }
}

export default App;