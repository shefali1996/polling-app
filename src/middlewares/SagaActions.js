import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {responseAction} from '../actions/Actions'
import { put } from "redux-saga/effects";

// import history from '../../src/App'

toast.configure();

const addUserRequest = (user,history) => {
  const notify = alert => toast(alert);
  axios
    .post(
      `https://secure-refuge-14993.herokuapp.com/add_user?username=${
        user.username
      }&password=${user.password}&role=${user.role}`
    )
    .then(function(response) {
      if (response.data.error === 0) {
        {
          notify("User Added Sucessfully");
          history.push('/')
        }
      } else {
        notify(response.data.message);
      }
    })
    .catch(function(error) {
      notify(error);
    });
};

const loginUserRequest = (user,history )=> {
  const notify = alert => toast(alert);
  return axios
    .get(
      `https://secure-refuge-14993.herokuapp.com/login?username=${
        user.username
      }&password=${user.password}`
    )
    .then(function(response) {
      console.log(response)
      if (response.data.error === 0) {
        {
          notify("Login Sucessfull");
          history.push('/Userlogin')
        }
      } else {
        notify(response.data.data);
      }
      return response.data
    })
    .catch(function(error) {
        notify(error);
    });
};

export function* addUser(action) {
  yield addUserRequest(action.payload.user,action.payload.history);
}
export function* login(action) {
  console.log(action.payload,'hgfgfgy5e544578')
  let responseData =yield loginUserRequest(action.payload.user,action.payload.history) 
  yield put(responseAction(responseData) )
  console.log(responseData,'responseData');
}
