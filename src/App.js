import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "leaflet/dist/leaflet.css";
import Home from "./Home";
import Login from "./Login";

function App() {
  return (
    <div className="app">
      <Router>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
