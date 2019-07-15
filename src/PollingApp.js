import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import UserRegister from "./container/UserRegister";
import UserLogin from "./container/UserLogin";

class PollingApp extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route component={UserRegister} path="/register" />
            <Route component={UserLogin} exact path="/" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default PollingApp;
