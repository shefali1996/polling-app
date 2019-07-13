import React, { Component } from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Header from './components/Header'
import UserRegister from './container/UserRegister';


class PollingApp extends Component {
    render() {
        return (
            <div>
               <BrowserRouter>
                    <Header />
                <Switch>
                    <Route component={UserRegister} exact path='/register'/>
                </Switch>
               </BrowserRouter>
            </div>
        )
    }
}

export default PollingApp;

