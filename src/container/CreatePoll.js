import React, { Component } from "react";
import { Button, Form, Container } from "react-bootstrap";

class CreatePoll extends Component {
  state = {
    options: []
  };

  addMoreOption = () => {
    let i = 1;
    this.setState({
      options: this.state.options.concat(i++)
    });
    console.log(this.state.options);
  };
  render() {
    return (
      <div>
        <Container>
          <Form>
            <Form.Group controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter Title" />
            </Form.Group>
            {this.state.options.map((val, index) => {
              return (
                <Form.Group controlId="formBasicOption" key={index}>
                  <Form.Label>Option{index+1}</Form.Label>
                  <Form.Control type="text" placeholder="Option" />
                </Form.Group>
              );
            })}
            <Button variant="primary" onClick={this.addMoreOption}>
              Add Options
            </Button>
            <br/><br/>
            <Button variant="primary" type="submit">
              Create
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default CreatePoll;
