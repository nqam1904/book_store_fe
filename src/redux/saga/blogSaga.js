import { put, takeLatest, call, select } from 'redux-saga/effects'
import * as Action from 'redux/actions/blogAction'
import blogApi from 'api/blogApi'
import { Loading } from 'components'
import { toast } from 'react-toastify'
import optionToast from 'utils/Toast'
import { history } from 'redux/store'
import { userSelector } from 'redux/selectores/authSelector'
import mediaApi from 'api/mediaApi'
const option = optionToast

function* listBlogSaga(action) {
	try {
		const response = yield call(blogApi.getAll)
		yield put(Action.getListBlogSuccess(response.data))
	} catch (error) {
		toast.error(`${error}`, option)
	}
}
//********************************* */
function* createBlogSaga(action) {
	console.log(action.payload)
	try {
		Loading.show()
		const file = yield call(mediaApi.upload, action.payload?.fileImage)
		const user = yield select(userSelector)
		const response = yield call(blogApi.add, {
			...action.payload,
			author: `${user.firstName} ${user.lastName}`,
			imagesId: [...file[0]?.mediasId],
		})
		yield put(Action.getListBlogAction())
	} catch (error) {
		toast.error(`${error}`, option)
	} finally {
		Loading.hide()
	}
}
//********************************* */
function* updateBlogSaga(action) {
	try {
		Loading.show()
		const response = yield call(blogApi.update, action.payload)
		yield put(Action.getListBlogAction())
		toast.success(`Update blog success`, option)
	} catch (error) {
		toast.error(`${error}`, option)
	} finally {
		Loading.hide()
	}
}
//********************************* */
function* deleteBlogSaga(action) {
	try {
		Loading.show()
		const response = yield call(blogApi.remove, action.payload)
		yield put(Action.getListBlogAction())
		toast.success(`Remove blog success`, option)
	} catch (error) {
		toast.error(`${error}`, option)
	} finally {
		Loading.hide()
	}
}
export default function* () {
	yield takeLatest(Action.GET_LIST_BLOG, listBlogSaga)
	yield takeLatest(Action.CREATE_BLOG, createBlogSaga)
	yield takeLatest(Action.UPDATE_BLOG, updateBlogSaga)
	yield takeLatest(Action.DELETE_BLOG, deleteBlogSaga)
}
