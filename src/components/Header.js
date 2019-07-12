import React, { Component } from "react";
import { Navbar,Nav } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand >Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
