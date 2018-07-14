import { routerMiddleware } from 'react-router-redux'
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export default (initialState = {}) => {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
    let middleware = applyMiddleware(sagaMiddleware, routerMiddleware(history))

    const store = createStore(
        reducers,
        initialState,
        composeEnhancers(middleware)
    );
  
    sagaMiddleware.run(rootSaga)

    return store
  
}