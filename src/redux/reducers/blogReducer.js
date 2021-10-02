import * as Action from 'redux/actions/blogAction'
import { SIGN_OUT } from 'redux/actions/loginAction'
const initialState = {
	listBlog: [],
}

export const blogReducer = (state = initialState, action) => {
	switch (action.type) {
		case Action.GET_LIST_BLOG_SUCCESS:
			return {
				...state,
				listBlog: action.payload,
			}
		case SIGN_OUT:
			return {
				...initialState,
			}
		default:
			return state
	}
}
