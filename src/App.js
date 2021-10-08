import "./App.css";
// import PropTypes from "prop-types";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import Newsitem from "./Components/Newsitem";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <Switch>
            <Route exact path="/">
              <News key="entertainment" country="in" category="entertainment" />
            </Route>
            <Route exact path="/business">
              <News key="uisness" country="in" category="buisness" />
            </Route>
            <Route exact path="/entertainment">
              <News key="entertainment" country="in" category="entertainment" />
            </Route>
            <Route path="/general">
              <News key="general" country="in" category="general" />
            </Route>
            <Route path="/Health">
              <News key="Health" country="in" category="Health" />
            </Route>
            <Route exact path="/Science">
              <News key="science" country="in" category="science" />
            </Route>
            <Route exact path="/sports">
              <News key="sports" country="in" category="sports" />
            </Route>
            <Route exact path="/technology">
              <News key="technology" country="in" category="technology" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
