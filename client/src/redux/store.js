import { createStore, combineReducers } from 'redux'
import { shopReducer } from './shopReducer'
import { headerReducer } from './headerReducer'

const reducers = combineReducers({
  shop: shopReducer,
  header: headerReducer,
})

export const store = createStore(reducers)
