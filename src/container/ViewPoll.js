import React, { Component } from "react";
import {
  Form,
  Container,
  Card,
  Button,
  Row,
  ButtonToolbar
} from "react-bootstrap";
import { connect } from "react-redux";
import {
  viewPoll,
  doVote,
  addOption,
  deleteOption,
  updateTitle
} from "../actions/Actions";

class ViewPoll extends Component {
  componentDidMount() {
    this.props.viewPoll(this.props.match.params.id);
  }

  state = {
    add: false,
    update: false,
    new_option: "",
    new_title: "",
    text: ""
  };
  addTextBox = () => {
    this.setState({
      add: true
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  save = () => {
    this.props.addOption(this.state.new_option, this.props.match.params.id);
    this.setState({
      add: false
    });
  };

  delete = val => {
    this.props.deleteOption(val, this.props.match.params.id);
  };

  updateTextBox = () => {
    this.setState({
      update: true,
      new_title: this.props.poll.title
    });
  };

  cancel = () => {
    this.setState({
      new_title: this.state.text,
      update: false
    });
  };

  update = () => {
    this.props.updateTitle(this.state.new_title, this.props.match.params.id);
    this.setState({
      update: false
    });
  };

  render() {
    return (
      <div>
        <Container>
          <Card>
            <Card.Header>
              {this.state.update ? (
                <Form.Group controlId="new_title">
                  <Row>
                    <Form.Control
                      type="text"
                      placeholder="Title"
                      value={this.state.new_title}
                      name="new_title"
                      onChange={e => this.handleChange(e)}
                    />
                    <ButtonToolbar>
                      <Button
                        variant="primary"
                        type="button"
                        onClick={this.update}
                      >
                        Update
                      </Button>
                      <Button
                        variant="danger"
                        type="button"
                        onClick={this.cancel}
                      >
                        x
                      </Button>
                    </ButtonToolbar>
                  </Row>
                </Form.Group>
              ) : (
                <Row>
                  <div className="title">
                    {this.props.poll && this.props.poll.title}
                  </div>
                  <Button
                    variant="primary"
                    type="button"
                    onClick={this.updateTextBox}
                  >
                    Update Poll Title
                  </Button>
                </Row>
              )}
              <Button variant="primary" type="button" onClick={this.addTextBox}>
                Add New Option
              </Button>
            </Card.Header>
          </Card>
          <div className="opt">
            {this.props.poll &&
              this.props.poll.options &&
              this.props.poll.options.map((val, index) => {
                return (
                  <Form.Group>
                    <Row className="optionList">
                      <Form.Check
                        type="radio"
                        checked={val.vote === 1 ? true : false}
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
                      <Button
                        variant="primary"
                        type="button"
                        onClick={() => this.delete(val.option)}
                      >
                        Delete
                      </Button>
                    </Row>
                  </Form.Group>
                );
              })}
            {this.state.add && (
              <Form className="option_4">
                <Form.Group controlId="option4">
                  <Form.Label>New Option</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="New Option"
                    value={this.state.new_option}
                    name="new_option"
                    onChange={e => this.handleChange(e)}
                  />
                  <Button variant="primary" type="button" onClick={this.save}>
                    Save
                  </Button>
                </Form.Group>
              </Form>
            )}
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.ListAllPollsReducer.deleteOptionData, "aaaaaaaa");
  return {
    poll: state.ListAllPollsReducer.poll,
    addOptionData: state.ListAllPollsReducer.addOptionData,
    deleteOptionData: state.ListAllPollsReducer.deleteOptionData,
    updateTitleData: state.ListAllPollsReducer.updateTitleData
  };
};
const mapDispatchToProps = dispatch => {
  return {
    viewPoll: id => dispatch(viewPoll(id)),
    doVote: (val, id) => dispatch(doVote({ val, id })),
    addOption: (option4, id) => dispatch(addOption({ option4, id })),
    deleteOption: (val, id) => dispatch(deleteOption({ val, id })),
    updateTitle: (new_title, id) => dispatch(updateTitle({ new_title, id }))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewPoll);
