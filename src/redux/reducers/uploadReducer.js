import * as Action from 'redux/actions/uploadAction'
import { SIGN_OUT } from 'redux/actions/loginAction'
const initialState = {
	files: '',
}

export const uploadReducer = (state = initialState, action) => {
	switch (action.type) {
		case Action.UPLOAD_FILE_SUCCESS:
			return {
				...state,
				files: action.payload,
			}

		case SIGN_OUT:
			return {
				...initialState,
			}
		default:
			return state
	}
}
