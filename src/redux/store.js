import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "redux/saga";
import rootReducer from "redux/reducers";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory({
  forceRefresh: true,
});
export default function configureStore(preloadedState) {
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares));

  const store = createStore(
    rootReducer(history),
    preloadedState,
    composedEnhancer
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
