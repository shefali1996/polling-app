import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <div>
        {this.props.error ? (
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand>Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Link to="/">Login</Link>
              <Link to="/register">Register</Link>
            </Nav>
          </Navbar>
        ) : (
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand>Navbar</Navbar.Brand>
            <Nav className="mr-auto">
            <Link to="/list-users">List Users</Link>
            <Link to="/">Sign Out</Link>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
