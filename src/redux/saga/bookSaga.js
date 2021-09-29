import { put, takeLatest, call } from 'redux-saga/effects'
import * as Action from 'redux/actions/bookAction'
import { Loading } from 'components'
import { toast } from 'react-toastify'
import optionToast from 'utils/Toast'
import booksApi from 'api/booksApi'
const option = optionToast

//********************************* */
function* getListBookSaga(action) {
	try {
		Loading.show()
		const response = yield call(booksApi.getAll)
		yield put(Action.getListBookSuccess(response))
	} catch (error) {
		toast.error(`${error}`, option)
	} finally {
		Loading.hide()
	}
}

export default function* () {
	yield takeLatest(Action.GET_LIST_BOOK, getListBookSaga)
}
