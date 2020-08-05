import { createStore, combineReducers, applyMiddleware } from 'redux'
import { shopReducer } from './shopReducer'
import { headerReducer } from './headerReducer'
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
  shop: shopReducer,
  header: headerReducer,
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))
