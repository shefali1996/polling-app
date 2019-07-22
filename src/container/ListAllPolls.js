import React, { Component } from "react";
import { connect } from "react-redux";
import { listAllPolls, doVote } from "../actions/Actions";
import { Form, Container, Card, Button,ListGroup } from "react-bootstrap";

class ListAllPolls extends Component {
  componentDidMount() {
    this.props.listAllPolls();
  }
  handlePollClick = id => {
    this.props.history.push(`/list-all-polls/${id}`);
  };

  render() {
    console.log(this.props.polls);

    return (
      <div>
        {this.props.polls &&
          this.props.polls.map((val, index) => {
            return (
              <Container>
                <Card>
                  <Card.Header>
                    {val.title}
                    <Button
                      variant="primary"
                      onClick={() => this.handlePollClick(val._id)}
                    >
                      View Poll
                    </Button>
                  </Card.Header>
                </Card>
                    <ListGroup variant="flush">
                    {val.options.map((option, i) => {
                  return (
                      <ListGroup.Item><span>{option.option}</span>vote:{option.vote}<span></span></ListGroup.Item>
                  );
                })}
                </ListGroup>
              </Container>
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    polls: state.ListAllPollsReducer.polls
  };
};

const mapDispatchToProps = dispatch => {
  return {
    listAllPolls: () => dispatch(listAllPolls())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListAllPolls);
