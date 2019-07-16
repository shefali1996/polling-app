import {combineReducers} from 'redux'
import {ViewPollReducer} from './view-poll-reducer'
import {CreatePollReducer} from './create-poll-reducer'


 const rootReducer = combineReducers(()=>{
     ViewPollReducer,
     CreatePollReducer
})

export default rootReducer;
