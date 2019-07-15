import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {applyMiddleware,createStore} from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './middlewares/rootSaga'

// import rootReducer from './reducers/Reducer'
import Reg from './reducers/Register'

const sagaMiddleware=createSagaMiddleware();

const store = createStore(Reg,applyMiddleware(logger,sagaMiddleware));

sagaMiddleware.run(rootSaga)
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
