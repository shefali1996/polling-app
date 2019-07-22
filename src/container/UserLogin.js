import React, { Component } from "react";
import { Button, Form, Container} from "react-bootstrap";
import { connect } from "react-redux";
import { login,changeErrorValue,loginStatus } from "../actions/Actions";

class UserLogin extends Component {

  componentDidMount(){
    this.props.changeErrorValue()
  }

  state = {
    username: "",
    password: "",
    loggedIn:false
  };
  onChangeHandle = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  loginUser_obj = () => {
    if (this.state.username && this.state.password !== "") {
      this.props.history.push('/list-all-polls')
      let user = { ...this.state };
      this.props.login(user);
      this.setState({
        username: "",
        password: "",
        loggedIn:true
      });
    }
    this.props.loginStatus(!this.state.loggedIn)
  };
  render() {
    var { username, password } = this.state;
    return (
      <div>
        <Container>
          <Form
            controlId="formElem"
            onSubmit={e => {
              e.preventDefault();
              this.loginUser_obj();
            }}
          >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="username"
                value={username}
                onChange={this.onChangeHandle}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={this.onChangeHandle}
              />
            </Form.Group>
              <Button variant="primary" type="submit">
                Sign In
              </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
    changeErrorValue:()=>dispatch(changeErrorValue()),
    loginStatus:(status)=>dispatch(loginStatus(status))

  };
};

const mapStateToProps = state => {
  return {}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLogin);
