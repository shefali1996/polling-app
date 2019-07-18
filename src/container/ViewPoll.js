import React, { Component } from "react";
import { Form, Container, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { viewPoll } from "../actions/Actions";

class ViewPoll extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id, "paramssssssssssssss");
    this.props.viewPoll(this.props.match.params.id);
  }
  render() {
    console.log(this.props.poll.options,'ooooooooooo')
    return (
      <div>
        <Container>
          <Card>
            <Card.Header>{this.props.poll.title}</Card.Header>
          </Card>
          {this.props.poll.options.map((val, index) => {
            return (
              <Form.Check
                type="radio"
                label={val.option}
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            );
          })}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    poll: state.ListAllPollsReducer.poll
  };
};
const mapDispatchToProps = dispatch => {
  return {
    viewPoll: id => dispatch(viewPoll(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewPoll);
