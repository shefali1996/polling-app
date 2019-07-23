import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect, withRouter} from "react-router-dom";
import Header from "./components/Header";
import UserRegister from "./container/UserRegister";
import UserLogin from "./container/UserLogin";
import CreatePoll from "./container/CreatePoll";
import "../src/App.css";
import ListUsers from "./container/ListUsers";
import ListAllPolls from "./container/ListAllPolls";
import ViewPoll from "./container/ViewPoll";
import { connect } from "react-redux";

 class PrivateRoute extends Component{
render(){
  return(
    <div>
    {localStorage.getItem("accessToken")?this.props.children:<Redirect to='/' />}
    </div>
  )
}
}

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route component={UserRegister} path="/register" />
            <Route component={UserLogin} exact path="/" />

            <PrivateRoute>
            <Route component={CreatePoll} path='/create-poll'/>
            <Route component={ListUsers} path='/list-users'/>
            <Route component={ListAllPolls} exact path='/list-all-polls'/>
            <Route component={ViewPoll} path='/list-all-polls/:id'/>
          </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </div>
        
    );
  }
}
const mapStateToProps = state => {
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
