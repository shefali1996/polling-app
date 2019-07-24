import React, { Component } from "react";
import { connect } from "react-redux";
import{withRouter} from 'react-router-dom'
import { listAllPolls,deletePoll } from "../actions/Actions";
import { Container, Card, Button, ListGroup, Badge } from "react-bootstrap";
import isEqual from 'lodash/isEqual'

class ListAllPolls extends Component {
  componentDidMount() {
    this.props.listAllPolls();
  }
  handlePollClick = id => {
    this.props.history.push(`/list-all-polls/${id}`);
  };

  deletePollClick=(id)=>{
    this.props.deletePoll(id);
  }

  componentDidUpdate=(props)=>{
    if(isEqual(props,this.props)){
      this.props.listAllPolls();
    }
  }

  render() {
    return (
      <div>
        {this.props.polls &&
          this.props.polls.map((val, index) => {
            return (
              <Container>
                <Card>
                  <Card.Header>
                    <div className='title'>{val.title}</div>
                    <Button
                      variant="primary"
                      onClick={() => this.handlePollClick(val._id)}
                    >
                      View Poll
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => this.deletePollClick(val._id)}
                    >
                      Delete Poll
                    </Button>
                  </Card.Header>
                </Card>
                <ListGroup>
                  {val.options.map((option, i) => {
                    return (
                      <ListGroup.Item>
                        <span>{option.option}</span>
                        <Button variant="success">
                          Votes <Badge variant="light">{option.vote}</Badge>
                          <span className="sr-only">unread messages</span>
                        </Button>
                      </ListGroup.Item>
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
    listAllPolls: () => dispatch(listAllPolls()),
    deletePoll:(id)=>dispatch(deletePoll(id))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListAllPolls));
