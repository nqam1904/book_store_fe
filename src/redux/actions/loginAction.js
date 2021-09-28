export const SIGN_IN = 'SIGN_IN'
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export const SIGN_OUT = 'SIGN_OUT'

export const loginAction = (payload) => {
	return {
		type: SIGN_IN,
		payload: payload,
	}
}

export const loginSuccess = (payload) => {
	return {
		type: SIGN_IN_SUCCESS,
		payload: payload,
	}
}

export const signOutAction = () => {
	return {
		type: SIGN_OUT,
	}
}
//********************************* */
export const GET_LIST_ACCOUNT = 'GET_LIST_ACCOUNT'
export const getListAccountAction = () => {
	return {
		type: GET_LIST_ACCOUNT,
	}
}
export const GET_LIST_ACCOUNT_SUCCESS = 'GET_LIST_ACCOUNT_SUCCESS'
export const getlistAccountSuccess = (payload) => {
	return {
		type: GET_LIST_ACCOUNT_SUCCESS,
		payload,
	}
}

//********************************* */
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT'
export const createAccountAction = (payload) => {
	return {
		type: CREATE_ACCOUNT,
		payload,
	}
}
