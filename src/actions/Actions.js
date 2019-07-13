import {ADD_USER} from './ActionType'

export function addUser(payload) {
  console.log('action add')
    return { type: ADD_USER, payload }
  };