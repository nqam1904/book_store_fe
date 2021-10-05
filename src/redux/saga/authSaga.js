import { put, takeLatest, call } from 'redux-saga/effects'
import * as Action from 'redux/actions/loginAction'
import loginApi from 'api/loginApi'
import { Loading } from 'components'
import { toast } from 'react-toastify'
import optionToast from 'utils/Toast'
import StorageKeys from 'constants/Storage-key'
import { history } from 'redux/store'
import userApi from '../../api/userApi'
import { DialogRef } from 'pages/admin/user'
import { signUpRef } from 'components/headerClient/HeaderClient'
const option = optionToast

function* loginSaga(action) {
	try {
		Loading.show()
		const response = yield call(loginApi.login, action.payload)
		localStorage.setItem(StorageKeys.TOKEN, response.access_token)
		if (response.data?.role === 'admin') {
			history.push('/admin/account')
		}
		yield put(Action.loginSuccess(response.data))
		toast.success('🚀 Login success', option)
	} catch (error) {
		toast.error(`${error}`, option)
	} finally {
		Loading.hide()
	}
}
function* loginDiscordSaga(action) {
	try {
		const response = yield call(loginApi.discord, action.payload)
		localStorage.setItem(StorageKeys.TOKEN, response.access_token)
		if (response.data?.role === 'admin') {
			history.push('/admin/account')
		}
		yield put(Action.loginSuccess(response.data))
	} catch (error) {
		toast.error(`${error}`, option)
	}
}
//********************************* */
function* getListAccountSaga(action) {
	try {
		const response = yield call(userApi.getAll)
		yield put(Action.getlistAccountSuccess(response))
	} catch (error) {
		toast.error(`${error}`, option)
	}
}
//********************************* */
function* createActionSaga(action) {
	try {
		Loading.show()
		// eslint-disable-next-line
		const response = yield call(userApi.add, action.payload)
		yield put(Action.getListAccountAction())
		DialogRef?.current?.close()
		signUpRef?.current?.close()
		toast.success(`create new account success`, option)
	} catch (error) {
		toast.error(`${error}`, option)
	} finally {
		Loading.hide()
	}
}
//********************************* */
function* editActionSaga(action) {
	try {
		Loading.show()
		// eslint-disable-next-line
		const response = yield call(userApi.update, action.payload)
		yield put(Action.getListAccountAction())
		yield DialogRef.current.close()
		toast.success(`Update account success`, option)
	} catch (error) {
		toast.error(`${error}`, option)
	} finally {
		Loading.hide()
	}
}
//********************************* */
function* deleteActionSaga(action) {
	try {
		Loading.show()
		// eslint-disable-next-line
		const response = yield call(userApi.remove, action.payload)
		yield put(Action.getListAccountAction())
		toast.success(`Remove account success`, option)
	} catch (error) {
		toast.error(`${error}`, option)
	} finally {
		Loading.hide()
	}
}
// eslint-disable-next-line
export default function* () {
	yield takeLatest(Action.SIGN_IN, loginSaga)
	yield takeLatest(Action.LOGIN_DISCORD, loginDiscordSaga)
	yield takeLatest(Action.GET_LIST_ACCOUNT, getListAccountSaga)
	yield takeLatest(Action.CREATE_ACCOUNT, createActionSaga)
	yield takeLatest(Action.EDIT_ACCOUNT, editActionSaga)
	yield takeLatest(Action.DELETE_ACCOUNT, deleteActionSaga)
}
