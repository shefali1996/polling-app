import {combineReducers} from 'redux'
import {ListAllPollsReducer} from './ListAllPollsReducer'
import {LoginReducer} from './LoginReducer'
import {ListUsersReducer} from './ListUsersReducer'

const rootReducer = combineReducers(
   { LoginReducer,
    ListUsersReducer,
    ListAllPollsReducer
}
);

export default rootReducer;
