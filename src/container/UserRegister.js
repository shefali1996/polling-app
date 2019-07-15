import React, { Component } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { addUser } from "../actions/Actions";
class UserRegister extends Component {
  state = {
    username: "",
    password: "",
    role:''
  };
  onChangeHandle = e => {
    this.setState({
     [e.target.name] : e.target.value
    });
  };
  addUser_obj = () => {
    if (this.state.username && this.state.password !== "") {
      let user = { ...this.state };
      this.props.addUser(user);
      this.setState({
        username: "",
        password: "",
        role:''
      });
    }
  };

  render() {
    var { username, password,role } = this.state;
    return (
      <div>
        <Container>
          <Form
            controlId="formElem"
            onSubmit={e => {
              e.preventDefault();
              this.addUser_obj();
            }}
          >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="username"
                value={username}
                onChange={this.onChangeHandle}
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={this.onChangeHandle}
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                name="role"
                value={role}
                onChange={this.onChangeHandle}
                placeholder="Role"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: obj => dispatch(addUser(obj))
  };
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserRegister);
