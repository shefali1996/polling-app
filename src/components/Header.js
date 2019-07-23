import React, { Component } from "react";
import { Navbar, Nav ,Button} from "react-bootstrap";
import { Link,withRouter} from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  sign_out=()=>{
    this.props.history.push('/');
    localStorage.clear('accessToken');
  }
    
  render() {
    return (
      <div>
        {localStorage.getItem('accessToken') ? (
          <Navbar bg="primary" variant="dark">
          <Nav className="mr-auto">
            <Link to="/list-users">List Users</Link>
            <Link to="/list-all-polls">List All Polls</Link>
            <Link to="/create-poll">Create Poll</Link>
          </Nav>
          <Button variant="primary" type="button" onClick={this.sign_out}>Sign Out</Button>
        </Navbar>
        ) : (
          
          <Navbar bg="primary" variant="dark">
          <Nav className="mr-auto">
            <Link to="/">Login</Link>
            <Link to="/register">Register</Link>
          </Nav>
        </Navbar>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.LoginReducer.error
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

export default withRouter( connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));
