import { takeLatest, all } from "redux-saga/effects";
import { addUser,login} from "./SagaActions";

function* watchActions() {
  yield takeLatest("ADD_USER", addUser);
  yield takeLatest('LOGIN',login)

}
export default function* rootSaga() {
  yield all([watchActions()]);
}
