import { authReducer } from './authReducer'
import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'
import { bookReducer } from './bookReducer'
import { uploadReducer } from './uploadReducer'
import { blogReducer } from './blogReducer'
const rootReducer = (history) =>
	combineReducers({
		user: authReducer,
		book: bookReducer,
		blog: blogReducer,
		file: uploadReducer,
		router: connectRouter(history),
	})
export default rootReducer
