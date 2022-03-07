import React from "react";
import './App.css';
import Navbar from "./components/Navbar"

// Contents
import Home from './contents/Home'
import About from "./contents/About";

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
      </div>
    </Router>
  );
}

export default App;