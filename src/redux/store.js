import { applyMiddleware, createStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from 'redux/saga'
import rootReducer from 'redux/reducers'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const sagaMiddleware = createSagaMiddleware()
export const history = createBrowserHistory({
	forceRefresh: true,
})
//config persist storage
const persistConfig = {
	key: 'root',
	storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer(history))

//
export default function configureStore(preloadedState) {
	const middlewares = [sagaMiddleware, routerMiddleware(history)]

	const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares))

	const store = createStore(persistedReducer, preloadedState, composedEnhancer)
	let persistor = persistStore(store)

	sagaMiddleware.run(rootSaga)
	return { store, persistor }
}
