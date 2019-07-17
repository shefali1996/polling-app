import {combineReducers} from 'redux'
import {ViewPollReducer} from './view-poll-reducer'
import {CreatePollReducer} from './create-poll-reducer'
import {LoginReducer} from './LoginReducer'
import {ListUsersReducer} from './ListUsersReducer'

const rootReducer = combineReducers(
   { LoginReducer,
    ListUsersReducer
}
    //  ViewPollReducer,
    //  CreatePollReducer
);

export default rootReducer;
