import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header/Header';
import Main from './Router/Main';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div id="root">
                    <Header/>
                    <Main/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;