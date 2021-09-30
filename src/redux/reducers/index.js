import { authReducer } from './authReducer'
import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'
import { bookReducer } from './bookReducer'
import { uploadReducer } from './uploadReducer'
const rootReducer = (history) =>
	combineReducers({
		user: authReducer,
		book: bookReducer,
		file: uploadReducer,
		router: connectRouter(history),
	})
export default rootReducer
