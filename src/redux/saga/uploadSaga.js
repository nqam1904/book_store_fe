import { put, takeLatest, call } from 'redux-saga/effects'
import * as Action from 'redux/actions/uploadAction'
import { toast } from 'react-toastify'
import optionToast from 'utils/Toast'
import mediaApi from 'api/mediaApi'

const option = optionToast

//********************************* */
function* getFileUpload(action) {
	try {
		const response = yield call(mediaApi.upload, action.payload)
		console.log(response, 'saga')
		yield put(Action.uploadFileSuccess(response))
	} catch (error) {
		toast.error(`${error}`, option)
	}
}

export default function* () {
	yield takeLatest(Action.UPLOAD_FILE, getFileUpload)
}
