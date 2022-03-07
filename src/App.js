import React from "react";
import './App.css';
import Navbar from "./components/Navbar"

// Contents
import Home from './contents/Home'

import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
      </div>
    </Router>
  );
}

export default App;