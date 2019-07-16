import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Link to='/'>Login</Link>
            <Link to='/register'>Register</Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  console.log(state,'headerstate');
  return{}
}
const mapDispatchToProps=(dispatch)=>{
  return{}
}

export default connect(mapStateToProps,mapDispatchToProps)( Header);


