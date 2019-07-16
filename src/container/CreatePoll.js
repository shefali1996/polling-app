import React from "react";
import { Button, Form, Container } from "react-bootstrap";

function CreatePoll() {
  this.state = {
    options: [],
  };

  this.addMoreOption=()=>{
      const i=0
      this.setState({
        options:this.state.options.concat(i++),
      });

  }
  return (
    <div>
      <container>
        <Form>
          <Form.Group controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Title" />
          </Form.Group>
          {this.state.options.map((val, index) => {
            return (
              <Form.Group controlId="formBasicOption" key={index}>
                <Form.Label>Option{index}</Form.Label>
                <Form.Control type="text" placeholder="Option" />
              </Form.Group>
            );
          })}
           <Button variant="primary" onClick={this.addMoreOption}>
            Add More Options
          </Button>
          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </container>
    </div>
  );
}

export default CreatePoll;
