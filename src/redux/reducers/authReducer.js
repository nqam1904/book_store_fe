import * as Action from 'redux/actions/loginAction'
const initialState = {
	user: {
		firstName: '',
		lastName: '',
		isActive: null,
		phone: '',
		email: '',
		id: 0,
		createDate: '',
		writeDate: '',
	},
	listAccount: [],
}

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case Action.SIGN_IN_SUCCESS:
			return {
				...state,
				user: action.payload,
			}
		case Action.GET_LIST_ACCOUNT_SUCCESS:
			return {
				...state,
				listAccount: action.payload,
			}
		case Action.SIGN_OUT:
			return {
				...initialState,
			}

		default:
			return state
	}
}
