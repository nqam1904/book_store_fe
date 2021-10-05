import { put, takeLatest, call, all } from 'redux-saga/effects'
import * as Action from 'redux/actions/bookAction'
import { Loading } from 'components'
import { toast } from 'react-toastify'
import optionToast from 'utils/Toast'
import booksApi from 'api/booksApi'
import categoryAPi from 'api/categoryApi'
import mediaApi from 'api/mediaApi'
import { DialogCategoryRef } from 'pages/admin/category'
import { DialogCreateBookRef } from 'pages/admin/books'
const option = optionToast

//********************************* */
function* getListBookSaga(action) {
	try {
		const response = yield call(booksApi.getAll)
		yield put(Action.getListBookSuccess(response))
	} catch (error) {
		toast.error(`${error}`, option)
	}
}
//********************************* */
function* createBookSaga(action) {
	try {
		Loading.show()
		const file = yield all([
			call(mediaApi.upload, action.payload?.fileImage),
			call(mediaApi.upload, action.payload?.file),
		])
		const response = yield call(booksApi.add, {
			...action.payload,
			imagesId: [...file[0]?.mediasId, ...file[1]?.mediasId],
		})
		yield put(Action.getListBookAction())
		DialogCreateBookRef.current.close()
		toast.success(`Create new book success`, option)
	} catch (error) {
		toast.error(`${error}`, option)
	} finally {
		Loading.hide()
	}
}
//********************************* */
function* deleteBookSaga(action) {
	try {
		Loading.show()
		const response = yield call(booksApi.remove, action.payload)
		yield put(Action.getListBookAction())
		toast.success(`Remove book success`, option)
	} catch (error) {
		toast.error(`${error}`, option)
	} finally {
		Loading.hide()
	}
}
//********************************* */
function* getListCategorySaga(action) {
	try {
		const response = yield call(categoryAPi.getAll)
		yield put(Action.getListCategorySuccess(response))
	} catch (error) {
		toast.error(`${error}`, option)
	}
}

//********************************* */
function* createCategorySaga(action) {
	try {
		Loading.show()
		const response = yield call(categoryAPi.add, action.payload)
		yield put(Action.getListCategoryAction())
		DialogCategoryRef.current.close()
		toast.success(`Create new category success`, option)
	} catch (error) {
		toast.error(`${error}`, option)
	} finally {
		Loading.hide()
	}
}
//********************************* */
function* editCategorySaga(action) {
	try {
		Loading.show()
		const response = yield call(categoryAPi.update, action.payload)
		yield put(Action.getListCategoryAction())
		DialogCategoryRef.current.close()
		toast.success(`Update category success`, option)
	} catch (error) {
		toast.error(`${error}`, option)
	} finally {
		Loading.hide()
	}
}
//********************************* */
function* deleteCategorySaga(action) {
	try {
		Loading.show()
		const response = yield call(categoryAPi.remove, action.payload)
		yield put(Action.getListCategoryAction())
		toast.success(`Remove category success`, option)
	} catch (error) {
		toast.error(`${error}`, option)
	} finally {
		Loading.hide()
	}
}
export default function* () {
	yield takeLatest(Action.GET_LIST_BOOK, getListBookSaga)
	yield takeLatest(Action.CREATE_BOOK, createBookSaga)
	yield takeLatest(Action.DELETE_BOOK, deleteBookSaga)
	yield takeLatest(Action.GET_LIST_CATEGORY, getListCategorySaga)
	yield takeLatest(Action.CREATE_CATEGORY, createCategorySaga)
	yield takeLatest(Action.EDIT_CATEGORY, editCategorySaga)
	yield takeLatest(Action.DELETE_CATEGORY, deleteCategorySaga)
}
