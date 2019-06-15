import React, { Component } from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Navbar from "./components/layout/Navbar";
import About from "./components/layout/About";
import Menus from "./components/menus/Menus";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Menus} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
