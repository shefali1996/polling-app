import {ADD_USER,USER_ADDED} from './ActionType'

export function addUser(payload) {
    return { type: ADD_USER, payload }
  };

  export function userAdded(payload) {
    return { type:USER_ADDED , payload }
  };

 