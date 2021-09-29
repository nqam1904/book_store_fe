import * as Action from 'redux/actions/bookAction'
import { SIGN_OUT } from 'redux/actions/loginAction'
const initialState = {
	listBook: [],
	listCategory: [],
}

export const bookReducer = (state = initialState, action) => {
	switch (action.type) {
		case Action.GET_LIST_BOOK_SUCCESS:
			return {
				...state,
				listBook: action.payload,
			}
		case Action.GET_LIST_CATEGORY_SUCCESS:
			return {
				...state,
				listCategory: action.payload,
			}
		case SIGN_OUT:
			return {
				...initialState,
			}
		default:
			return state
	}
}
