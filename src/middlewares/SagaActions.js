import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const addUserRequest = user => {
    const notify= alert => toast(alert);
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
      } else { notify(response.data.message);
      }
    })
    .catch(function(error) {
      alert(error);
    });
};


export function* addUser(id) {
  yield addUserRequest(id.payload);
}
