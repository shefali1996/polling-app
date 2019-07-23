import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  responseAction,
  listUsersSuccess,
  listAllPollsSuccess,
  viewPollSuccess
} from "../actions/Actions";
import { put } from "redux-saga/effects";

toast.configure();

const addUserRequest = (user, history) => {
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
          history.push("/");
        }
      } else {
        notify(response.data.message);
      }
    })
    .catch(function(error) {
      notify(error);
    });
};

const loginUserRequest = user => {
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
          if (typeof Storage !== "undefined") {
            localStorage.setItem("accessToken", response.data.token);
          }
          notify("Login Sucessfull");
        }
      } else {
        notify(response.data.data);
      }
      return response.data;
    })
    .catch(function(error) {
      notify(error);
    });
};

const addPollRequest = poll => {
  const notify = alert => toast(alert);
  axios
    .post(
      `https://secure-refuge-14993.herokuapp.com/add_poll?title=${
        poll.title
      }&options=${poll.options[0].option1}____${poll.options[1].option2}____${
        poll.options[2].option3
      }____${poll.options[3].option4}`
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
    .get(`https://secure-refuge-14993.herokuapp.com/list_users`)
    .then(function(response) {
      return response.data.data;
    })
    .catch(function(error) {
      notify(error);
    });
};

const listAllPollsRequest = () => {
  const notify = alert => toast(alert);
  return axios
    .get(`https://secure-refuge-14993.herokuapp.com/list_polls`)
    .then(function(response) {
      return response.data.data;
    })
    .catch(function(error) {
      notify(error);
    });
};

const viewPollRequest = id => {
  const notify = alert => toast(alert);
  return axios
    .post(`https://secure-refuge-14993.herokuapp.com/list_poll?id=${id}`)
    .then(function(response) {
      return response.data.data;
    })
    .catch(function(error) {
      notify(error);
    });
};

const doVoteRequest = (val, id) => {
  const notify = alert => toast(alert);
  let token = localStorage.getItem("accessToken");

  return axios({
    method: "post",
    url: `https://secure-refuge-14993.herokuapp.com/do_vote?id=${id}&option_text=${val}`,
    headers: {
      access_token: token
    }
  })
    .then(function(response) {
      notify("Vote Done");
    })
    .then(function(error) {});
};

const addOptionRequest = (option4,id)=> {
  return axios
    .post(`https://secure-refuge-14993.herokuapp.com/list_poll?id=${id}`)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};

export function* addUser(action) {
  yield addUserRequest(action.payload.user, action.payload.history);
}

export function* login(action) {
  let responseData = yield loginUserRequest(action.payload);
  yield put(responseAction(responseData));
}
export function* addPoll(action) {
  yield addPollRequest(action.payload);
}

export function* listUsers() {
  let allUsersData = yield listUsersRequest();
  yield put(listUsersSuccess(allUsersData));
}

export function* listAllPolls() {
  let allPollsData = yield listAllPollsRequest();
  yield put(listAllPollsSuccess(allPollsData));
}

export function* viewPoll(action) {
  let viewPollData = yield viewPollRequest(action.payload);
  yield put(viewPollSuccess(viewPollData));
}

export function* doVote(action) {
  yield doVoteRequest(action.payload.val, action.payload.id);
}

export function* addOption(action) {
  yield addOptionRequest(action.payload.option4, action.payload.id);
}

