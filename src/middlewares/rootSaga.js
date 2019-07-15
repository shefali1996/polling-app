import{takeLatest,all} from 'redux-saga/effects'
import {addUser} from './SagaActions'

function* watchActions() {    
    yield takeLatest('ADD_USER',addUser)
}
export default function* rootSaga() {
 yield all([watchActions()]);
}


