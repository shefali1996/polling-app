import React, { Component } from "react";
import { Form, Container, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { viewPoll, doVote } from "../actions/Actions";

class ViewPoll extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id, "paramssssssssssssss");
    this.props.viewPoll(this.props.match.params.id);
    if (typeof(Storage) !== "undefined"){
      console.log(localStorage.getItem('accessToken'),'aaaaaaaaaaaaa')
    }
  }
  render() {
    console.log(this.props.poll.options,'ooooooooooo')
    return (
      <div>
        <Container>
          <Card>
            <Card.Header>{this.props.poll.title}</Card.Header>
          </Card>
          {this.props.poll.options && this.props.poll.options.map((val) => {
            return (
              <Form.Check
                type="radio" onClick={(e)=>this.props.doVote(e.target.id,this.props.match.params.id)}
                label={val.option}
                name="formHorizontalRadios"
                id={val.option}
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
    viewPoll: id => dispatch(viewPoll(id)),
    doVote:(val,id)=>dispatch(doVote({val,id}))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewPoll);
