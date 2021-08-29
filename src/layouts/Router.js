// core
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// views
import Tracker from "../views/Tracker/Tracker";
import NotFound from "../views/NotFound/NotFound";

class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Tracker} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Router;
