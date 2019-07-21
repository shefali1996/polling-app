import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {responseAction,listUsersSuccess,listAllPollsSuccess,viewPollSuccess} from '../actions/Actions'
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
      if (response.data.error === 0) {
        {
          notify("Login Sucessfull");
          history.push('/create-poll')
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

const addPollRequest = (poll) => {
  const notify = alert => toast(alert);
  axios
    .post(
      `https://secure-refuge-14993.herokuapp.com/add_poll?title=first%20polll&options=${poll.options.option1}____${poll.options.option2}____${poll.options.option3}____${poll.options.option4}`
    )
    .then(function(response) {
      if (response.data.error === 0) {
        {
          notify("Poll Added Sucessfully");
        }
      } else {
        notify(response.data.message);
      }
    })
    .catch(function(error) {
      notify(error);
    });
};

const listUsersRequest = () => {
  const notify = alert => toast(alert);
  return axios
    .get(
      `https://secure-refuge-14993.herokuapp.com/list_users`
    )
    .then(function(response) {
      return response.data.data
    })
    .catch(function(error) {
      notify(error)
    });
};

const listAllPollsRequest = () => {
  const notify = alert => toast(alert);
  return axios
    .get(
      `https://secure-refuge-14993.herokuapp.com/list_polls`
    )
    .then(function(response) {
      console.log(response.data.data,'1111111111111111')
      return response.data.data
    })
    .catch(function(error) {
      notify(error)
    });
};

const viewPollRequest = (id) => {
  const notify = alert => toast(alert);
  return axios
    .post(
      `https://secure-refuge-14993.herokuapp.com/list_poll?id=${id}`
    )
    .then(function(response) {
      console.log(response.data.data,'1111111111111111')
      return response.data.data
    })
    .catch(function(error) {
      notify(error)
    });
};


export function* addUser(action) {
  yield addUserRequest(action.payload.user,action.payload.history);
}
export function* login(action) {
  let responseData =yield loginUserRequest(action.payload.user,action.payload.history) 
  yield put(responseAction(responseData))

}
export function* addPoll(action) {
  yield addPollRequest(action.payload);
}

export function* listUsers() {
  let allUsersData=yield listUsersRequest();
  yield put(listUsersSuccess(allUsersData))
}

export function* listAllPolls() {
  let allPollsData=yield listAllPollsRequest();
  yield put(listAllPollsSuccess(allPollsData))
}

export function* viewPoll(action) {
  console.log(action,'11111111111')
  let viewPollData=yield viewPollRequest(action.payload);
  yield put(viewPollSuccess(viewPollData))
}



