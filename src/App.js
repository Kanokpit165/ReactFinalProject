import React from "react";
import './App.css';
import Navbar from "./components/Navbar"
import 'materialize-css/dis/css/materialize.min.css';

// Contents
import Home from './contents/Home'
import About from "./contents/About"
import Resume from './contents/Resume'
import Portfolio from './contents/Portfolio'
import Contact from './contents/Contact'

import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </div>
    </Router>
  );
}

export default App;