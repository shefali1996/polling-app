import React, { Component } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { connect } from 'react-redux';
import {addPoll,changeErrorValue} from '../actions/Actions'

class CreatePoll extends Component {
  componentDidMount(){
    this.props.changeErrorValue()
  }
  state = {
    option1:"",
    option2:"",
    option3:"",
    option4:"",
    title:'',
  };


  onChangeHandle=(e)=>{
      this.setState({
        [e.target.name]:e.target.value
      })
  }

  createPollObj=()=>{
    const poll={
      title:this.state.title,
      options:[
      { option1:this.state.option1, vote:0},
      {option2:this.state.option2, vote:0},
      { option3:this.state.option3,vote:0},
      { option4:this.state.option4,vote:0},
      ]
    }
    this.props.addPoll(poll)
  }
  render() {
    var { title,option1,option2,option3,option4} = this.state;
    console.log(this.state);
    
    return (
      
      <div>
        <Container>
          <Form onSubmit={e => {
              e.preventDefault();
              this.createPollObj();
            }}>
            <Form.Group controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter Title" name='title' value={title} onChange={(e)=>this.onChangeHandle(e)} />
            </Form.Group>
                <Form.Group controlId="formBasicOption1">
                  <Form.Label>Option1</Form.Label>
                  <Form.Control type="text" name='option1' value={option1} placeholder='option1' onChange={(e)=>this.onChangeHandle(e)}/>
                </Form.Group>
                <Form.Group controlId="formBasicOption2">
                  <Form.Label>Option2</Form.Label>
                  <Form.Control type="text" name='option2' value={option2} placeholder='option3' onChange={(e)=>this.onChangeHandle(e)}/>
                </Form.Group>
                <Form.Group controlId="formBasicOption3">
                  <Form.Label>Option3</Form.Label>
                  <Form.Control type="text" name='option3' value={option3} placeholder='option3' onChange={(e)=>this.onChangeHandle(e)}/>
                </Form.Group>
                <Form.Group controlId="formBasicOption4">
                  <Form.Label>Option4</Form.Label>
                  <Form.Control type="text" name='option4' value={option4} placeholder='option4' onChange={(e)=>this.onChangeHandle(e)}/>
                </Form.Group>

            <Button variant="primary" type="submit">
              Create
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

const mapStateToProps=state=>{
return{}
};

const mapDispatchToProps=dispatch=>{
  return{
    addPoll:(poll)=>dispatch(addPoll(poll)),
    changeErrorValue:()=>dispatch(changeErrorValue())
  }
};



export default connect(mapStateToProps,mapDispatchToProps)(CreatePoll);
