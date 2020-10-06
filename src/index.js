import React from 'react';
import createSagaMiddleware from 'redux-saga'
import {render} from  'react-dom'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {logger} from 'redux-logger'
import './index.css';
import App from '../src/components/App';
import reducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware,logger)
)

sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)



if(module.hot){
  module.hot.accept(App)
}