import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import UserRegister from "./container/UserRegister";
import UserLogin from "./container/UserLogin";
import CreatePoll from './container/CreatePoll'
import '../src/App.css'
import ListUsers from './container/ListUsers'
import { createBrowserHistory } from 'history';
import ListAllPolls from './container/ListAllPolls';
import ViewPoll from './container/ViewPoll'
 
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
            <Route component={CreatePoll} path='/create-poll'/>
            <Route component={ListUsers} path='/list-users'/>
            <Route component={ListAllPolls} exact path='/list-all-polls'/>
            <Route component={ViewPoll} path='/list-all-polls/:id'/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
