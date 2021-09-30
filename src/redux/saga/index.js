import { all } from 'redux-saga/effects'
import authSaga from './authSaga'
import bookSaga from './bookSaga'
import uploadSaga from './uploadSaga'

export function* rootSaga() {
	yield all([authSaga(), bookSaga(), uploadSaga()])
}
