import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  axios
    .get(
      `https://secure-refuge-14993.herokuapp.com/login?username=${
        user.username
      }&password=${user.password}`
    )
    .then(function(response) {
      if (response.data.error === 0) {
        {
          notify("Login Sucessfull");
        }
      } else {
        notify(response.data.data);
      }
    })
    .catch(function(error) {
        notify(error);
    });
};

export function* addUser(action) {
  yield addUserRequest(action.payload);
}
export function* login(action) {
  yield loginUserRequest(action.payload);
}
