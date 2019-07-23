import { takeLatest, all } from "redux-saga/effects";
import { addUser,login,addPoll,listUsers,listAllPolls,viewPoll,doVote,addOption} from "./SagaActions";

function* watchActions() {
  yield takeLatest("ADD_USER", addUser);
  yield takeLatest('LOGIN',login);
  yield takeLatest('ADD_POLL',addPoll);
  yield takeLatest('LIST_USERS',listUsers);
  yield takeLatest('LIST_ALL_POLLS',listAllPolls)
  yield takeLatest('VIEW_POLL',viewPoll)
  yield takeLatest('DO_VOTE',doVote)
  yield takeLatest('ADD_OPTION',addOption)
}
export default function* rootSaga() {
  yield all([watchActions()]);
}
