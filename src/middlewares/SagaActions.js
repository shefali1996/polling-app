import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  responseAction,
  listUsersSuccess,
  listAllPollsSuccess,
  viewPollSuccess,
  addOptionSuccess,
  deleteOptionSuccess,
  updateTitleSuccess,
  addPollSuccess,
  viewPoll as view,
  listAllPolls as list
} from "../actions/Actions";
import { put } from "redux-saga/effects";

toast.configure();

const addUserRequest = user => {
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
          this.props.history.push("/");
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
  return axios
    .post(
      `https://secure-refuge-14993.herokuapp.com/add_poll?title=${
        poll.title
      }&options=${poll.options[0].option1}____${poll.options[1].option2}____${
        poll.options[2].option3
      }____${poll.options[3].option4}`
    )
    .then(function(response) {
      console.log(response.data,'addpiolllllllll')
      // if (response.data.error === 0) {
      //   {
      //     notify("Poll Added Sucessfully");
      //   }
      // } else {
      //   notify(response.data.message);
      // }
      return response.data
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

const addOptionRequest = (option4, id) => {
  const notify = alert => toast(alert);
  return axios
    .post(
      `https://secure-refuge-14993.herokuapp.com/add_new_option?id=${id}&option_text=${option4}`
    )
    .then(function(response) {
      return response.data
    })
    .catch(function(error) {
      notify(error);
    });
};

const deleteOptionRequest = (val, id) => {
  const notify = alert => toast(alert);
  return axios
    .post(
      `https://secure-refuge-14993.herokuapp.com/delete_poll_option?id=${id}&option_text=${val}`
    )
    .then(function(response) {
      return response.data
    })
    .catch(function(error) {
      notify(error);
    });
};

const updateTitleRequest = (new_title, id) => {
  const notify = alert => toast(alert);
  return axios
    .post(
      `https://secure-refuge-14993.herokuapp.com/update_poll_title?id=${id}&title=${new_title}`
    )
    .then(function(response) {
      return response.data
    })
    .catch(function(error) {
      notify(error);
    });
};

const deletePollRequest = id => {
  const notify = alert => toast(alert);
  return axios
    .post(`https://secure-refuge-14993.herokuapp.com/delete_poll?id=${id}`)
    .then(function(response) {
      notify("Poll Deleted");
    })
    .catch(function(error) {
      notify(error);
    });
};

export function* addUser(action) {
  yield addUserRequest(action.payload);
}

export function* login(action) {
  let responseData = yield loginUserRequest(action.payload);
  yield put(responseAction(responseData));
}
export function* addPoll(action) {
  let addPollData=yield addPollRequest(action.payload);
  console.log(addPollData,'00000000000')
  yield put(addPollSuccess(addPollData));
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
  console.log('22222222');
  
  let viewPollData = yield viewPollRequest(action.payload);
  console.log(viewPollData,action.payload,'66666666666');
  
  yield put(viewPollSuccess(viewPollData));
}

export function* doVote(action) {
  yield doVoteRequest(action.payload.val, action.payload.id);
  yield put(view(action.payload.id))
}

export function* addOption(action) {
  let addOptionData=yield addOptionRequest(action.payload.option4, action.payload.id);
  yield put(addOptionSuccess(addOptionData));
  yield put(view(action.payload.id))

}

export function* deleteOption(action) {
  let deleteOptionData=yield deleteOptionRequest(action.payload.val, action.payload.id);
  yield put(deleteOptionSuccess(deleteOptionData))
  yield put(view(action.payload.id))
}

export function* updateTitle(action) {
  let updateTitleData=yield updateTitleRequest(action.payload.new_title, action.payload.id);
  yield put(updateTitleSuccess(updateTitleData));
  yield put(view(action.payload.id))


}

export function* deletePoll(action) {
  yield deletePollRequest(action.payload);
  yield put(list());
  
}
