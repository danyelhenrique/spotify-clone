/* eslint-disable no-underscore-dangle */
import { compose, applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './ducks';
import sagas from './sagas';

const middlewares = [];

const sagaMonitor =
    process.env.NODE_ENV === 'development'
        ? console.tron.createSagaMonitor()
        : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const createApproprieateStore =
    process.env.NODE_ENV === 'development'
        ? compose(
              console.tron.createEnhancer(),
              applyMiddleware(...middlewares),
              window.__REDUX_DEVTOOLS_EXTENSION__()
          )
        : applyMiddleware(...middlewares);

const store = createStore(reducers, createApproprieateStore);

sagaMiddleware.run(sagas);

export default store;
