import { ADD_USER, LOGIN } from "./ActionType";

export function addUser(payload) {
  return { type: ADD_USER, payload };
}

export function login(payload){
  return {type:LOGIN,payload};
}
