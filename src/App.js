import React, { Component } from 'react'
import PollingApp from './PollingApp'

export default class App extends Component {
  call=()=>{
    fetch('https://secure-refuge-14993.herokuapp.com/add_user?username=admin&password=admin&role=admin')
    .then(response => response.json())
    .then(user =>console.log(user));
  }
  render() {
    return (
      <div>
        <button onClick={this.call}>Click me</button>
        <PollingApp />
      </div>
    )
  }
}
