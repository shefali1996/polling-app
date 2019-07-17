import {
  ADD_USER,
  LOGIN,
  RESPONSE_ACTION,
  CHANGE_ERROR_VALUE,
  ADD_POLL,
  LIST_USERS,
  LIST_USERS_SUCESS
} from "./ActionType";

export function addUser(payload) {
  return { type: ADD_USER, payload };
}

export function login(payload) {
  return { type: LOGIN, payload };
}

export function responseAction(payload) {
  return { type: RESPONSE_ACTION, payload };
}

export function changeErrorValue(payload) {
  return { type: CHANGE_ERROR_VALUE, payload };
}

export function addPoll(payload) {
  return { type: ADD_POLL, payload };
}

export function listUsers(payload) {
  return { type: LIST_USERS, payload };
}

export function listUsersSuccess(payload) {
  return { type: LIST_USERS_SUCESS, payload };
}
