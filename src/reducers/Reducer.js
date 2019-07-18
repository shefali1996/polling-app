import {combineReducers} from 'redux'
import {ListAllPollsReducer} from './ListAllPollsReducer'
import {CreatePollReducer} from './create-poll-reducer'
import {LoginReducer} from './LoginReducer'
import {ListUsersReducer} from './ListUsersReducer'

const rootReducer = combineReducers(
   { LoginReducer,
    ListUsersReducer,
    ListAllPollsReducer
}
    //  CreatePollReducer
);

export default rootReducer;
