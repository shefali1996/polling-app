import { ADD_USER, LOGIN,RESPONSE_ACTION } from "./ActionType";

export function addUser(payload) {
  return { type: ADD_USER, payload };
}

export function login(payload){
  return {type:LOGIN,payload};
}

export function responseAction(payload){
  console.log(payload,'actionPayload')
  return {type:RESPONSE_ACTION ,payload};
}

