import React from "react";
import { HashRouter } from "react-router-dom";
import Header from "./Header/Header.jsx";
import Main from "./Router/Main";

const App = () => {
  return (
    <HashRouter>
      <div id="root">
        <Header />
        <Main />
      </div>
    </HashRouter>
  );
};

export default App;
