import { createStore,applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import {apiMiddleware} from 'redux-api-middleware'
import createLogger from 'redux-logger'


export default () => {

const middlewares = [thunk,apiMiddleware]

if(process.env.NODE_ENV !== 'production')
    middlewares.push(createLogger())

  const store = createStore(
      rootReducer,
      applyMiddleware(...middlewares)
      )

  

  return store
}