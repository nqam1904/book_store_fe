import { authReducer } from './authReducer'
import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'
import { bookReducer } from './bookReducer'
const rootReducer = (history) =>
	combineReducers({
		user: authReducer,
		book: bookReducer,
		router: connectRouter(history),
	})
export default rootReducer
