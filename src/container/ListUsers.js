import React, { Component } from "react";
import { connect } from "react-redux";
import { listUsers,changeErrorValue } from "../actions/Actions";
import { Container } from "react-bootstrap";

class ListUsers extends Component {
  componentDidMount() {
    this.props.listUsers();
  }
  render() {
    return (
      <Container>
        <div>
          {this.props.data.map((val, index) => {
            return (
              <div>
                {val.map((innerval, index) => {
                  return (
                    <div class="row">
                      <div className="col">username:{innerval.username}</div>
                      <div className="col">password:{innerval.password}</div>
                      <div className="col">role:{innerval.role}</div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.ListUsersReducer.data
  };
};
const mapDispatchToProps = dispatch => {
  return {
    listUsers: () => dispatch(listUsers()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListUsers);
