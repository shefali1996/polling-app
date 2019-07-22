import React, { Component } from "react";
import { BrowserRouter, Switch, Route ,Redirect } from "react-router-dom";
import Header from "./components/Header";
import UserRegister from "./container/UserRegister";
import UserLogin from "./container/UserLogin";
import CreatePoll from "./container/CreatePoll";
import "../src/App.css";
import ListUsers from "./container/ListUsers";
import { createBrowserHistory } from "history";
import ListAllPolls from "./container/ListAllPolls";
import ViewPoll from "./container/ViewPoll";
import { connect } from "react-redux";

export const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header history={history} />
          <Switch>
            <Route component={UserRegister} path="/register" />
            <Route component={UserLogin} exact path="/" />
            <Route
              render={() => (!this.props.loggedIn ? <Redirect to="/" /> : <CreatePoll />)}
              path="/create-poll"
            />
            <Route
              render={() => (!this.props.loggedIn ? <Redirect to="/" /> : <ListUsers />)}
              path="/list-users"
            />
            <Route
              render={() => (!this.props.loggedIn ? <Redirect to="/" /> : <ListAllPolls />)}
              exact
              path="/list-all-polls"
            />
            <Route
              render={() => (!this.props.loggedIn ? <Redirect to="/" /> : <ViewPoll />)}
              path="/list-all-polls/:id"
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.LoginReducer.loginStatus,'status...........')
  return {
    loggedIn: state.LoginReducer.loginStatus
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
