export const UPLOAD_FILE = 'UPLOAD_FILE'
export const UPLOAD_FILE_SUCCESS = 'UPLOAD_FILE_SUCCESS'

export const uploadAction = (payload) => {
	console.log(payload, 'action')
	return {
		type: UPLOAD_FILE,
		payload,
	}
}
export const uploadFileSuccess = (payload) => {
	return {
		type: UPLOAD_FILE_SUCCESS,
		payload,
	}
}
