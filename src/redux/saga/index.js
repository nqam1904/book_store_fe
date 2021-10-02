import { all } from 'redux-saga/effects'
import authSaga from './authSaga'
import bookSaga from './bookSaga'
import uploadSaga from './uploadSaga'
import blogSaga from './blogSaga'
export function* rootSaga() {
	yield all([authSaga(), bookSaga(), uploadSaga(), blogSaga()])
}
