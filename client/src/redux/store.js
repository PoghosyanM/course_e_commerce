import { createStore, combineReducers } from 'redux'
import { shopReducer } from './shopReducer'

const reducers = combineReducers({
  shop: shopReducer,
})

export const store = createStore(reducers)
