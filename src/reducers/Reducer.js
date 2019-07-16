import {combineReducers} from 'redux'
import {ViewPollReducer} from './view-poll-reducer'
import {CreatePollReducer} from './create-poll-reducer'
import {LoginReducer} from './LoginReducer'

const rootReducer = combineReducers(
   { LoginReducer,

}
    //  ViewPollReducer,
    //  CreatePollReducer
);

export default rootReducer;
