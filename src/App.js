import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import UserRegister from "./container/UserRegister";
import UserLogin from "./container/UserLogin";
import CreatePoll from './container/CreatePoll'
import '../src/App.css'
import { createBrowserHistory } from 'history';
 
export const history = createBrowserHistory();


export default class App extends Component {
 
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header history={history}/>
          <Switch>
            <Route component={UserRegister} path="/register" />
            <Route component={UserLogin} exact path="/" />
            <Route component={CreatePoll} path='/Userlogin'/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
