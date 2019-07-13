import React, { Component } from 'react'
import PollingApp from './PollingApp'
import {connect} from 'react-redux'

class App extends Component {
 
  render() {
    return (
      <div>
        <PollingApp />
      </div>
    )
  }
}
const mapStateToProps=()=>{
    
}

const mapDispatchToProps=()=>{

}

export default connect(mapDispatchToProps,mapStateToProps)(App);
