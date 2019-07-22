import React, { Component } from "react";
import { Form, Container, Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { viewPoll, doVote } from "../actions/Actions";

class ViewPoll extends Component {
  componentDidMount() {
    this.props.viewPoll(this.props.match.params.id);
  }

  state = {
    add: "false"
  };
  addOption = () => {
    this.setState({
      add: true
    });
  };

  render() {
    return (
      <div>
        <Container>
          <Card>
            <Card.Header>
              {this.props.poll.title}
              <Button variant="primary" onClick={this.addOption}>
                Add New Option
              </Button>
            </Card.Header>
          </Card>
          {this.props.poll.options &&
            this.props.poll.options.map(val => {
              return (
                <Form.Check
                  type="radio"
                  onClick={e =>
                    this.props.doVote(e.target.id, this.props.match.params.id)
                  }
                  label={val.option}
                  name="formHorizontalRadios"
                  id={val.option}
                />
              );
            })}
          {this.state.add && (
            <Form className="option_4">
              <Form.Group controlId="option4">
                <Form.Label>option4</Form.Label>
                <Form.Control type="text" placeholder="option4" />
              </Form.Group>
            </Form>
          )}
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
    doVote: (val, id) => dispatch(doVote({ val, id }))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewPoll);
