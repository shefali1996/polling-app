import React, { Component } from "react";
import { Form, Container, Card, Button,Row } from "react-bootstrap";
import { connect } from "react-redux";
import { viewPoll, doVote, addOption,deleteOption } from "../actions/Actions";

class ViewPoll extends Component {
  componentDidMount() {
    this.props.viewPoll(this.props.match.params.id);
  }

  state = {
    add: false,
    option4: ""
  };
  addTextBox = () => {
    this.setState({
      add: true
    });
  };

  handleChange = e => {
    this.setState({
      option4: e.target.value
    });
  };

  save = () => {
    this.props.addOption(this.state.option4, this.props.match.params.id);
    this.setState({
      add: false
    });
    this.props.viewPoll(this.props.match.params.id);
  };

  delete=(val)=>{
    this.props.deleteOption(val,this.props.match.params.id);
    this.props.viewPoll(this.props.match.params.id);
    
  }

  render() {
    return (
      <div>
        <Container>
          <Card>
            <Card.Header>
              {this.props.poll.title}
              <Button variant="primary" type="button" onClick={this.addTextBox}>
                Add New Option
              </Button>
            </Card.Header>
          </Card>
          {this.props.poll.options &&
            this.props.poll.options.map((val, index) => {
              return (
                  <Form.Group>
                    <Row>
                    <Form.Check
                      type="radio"
                      onClick={e =>
                        this.props.doVote(
                          e.target.id,
                          this.props.match.params.id
                        )
                      }
                      label={val.option}
                      name="formHorizontalRadios"
                      id={val.option}
                    />
                    <Button variant="primary" type="button" onClick={()=>this.delete(val.option)}>Delete</Button>
                    </Row>
                  </Form.Group>
              );
            })}
          {this.state.add && (
            <Form className="option_4">
              <Form.Group controlId="option4">
                <Form.Label>Option4</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="option4"
                  value={this.state.option4}
                  onChange={e => this.handleChange(e)}
                />
                <Button variant="primary" type="button" onClick={this.save}>
                  Save
                </Button>
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
    doVote: (val, id) => dispatch(doVote({ val, id })),
    addOption: (option4, id) => dispatch(addOption({ option4, id })),
    deleteOption:(val,id)=>dispatch(deleteOption({val,id}))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewPoll);
