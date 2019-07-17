import { takeLatest, all } from "redux-saga/effects";
import { addUser,login,addPoll,listUsers} from "./SagaActions";

function* watchActions() {
  yield takeLatest("ADD_USER", addUser);
  yield takeLatest('LOGIN',login);
  yield takeLatest('ADD_POLL',addPoll);
  yield takeLatest('LIST_USERS',listUsers);
}
export default function* rootSaga() {
  yield all([watchActions()]);
}
