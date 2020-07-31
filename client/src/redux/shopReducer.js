import {
  addedItem,
  incrementCartItemQuantity,
  decrementCartItemQuantity,
} from './helpers'
import Axios from 'axios'

const INITIAL_STATE = {
  shopData: {},
  cart: [],
}

const ADD_CART_ITEM = 'ADD_CART_ITEM'
const INCREMENT_CART_ITEM_QUANTITY = 'INCREMENT_CART_ITEM_QUANTITY'
const DECREMENT_CART_ITEM_QUANTITY = 'DECREMENT_CART_ITEM_QUANTITY'
const GET_SHOP_DATA = 'GET_SHOP_DATA'

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return {
        ...state,
        cart: addedItem(action.payload, state.cart),
      }
    case INCREMENT_CART_ITEM_QUANTITY:
      return {
        ...state,
        cart: incrementCartItemQuantity(action.payload, state.cart),
      }
    case DECREMENT_CART_ITEM_QUANTITY:
      return {
        ...state,
        cart: decrementCartItemQuantity(action.payload, state.cart),
      }
    case GET_SHOP_DATA:
      return {
        ...state,
        shopData: action.payload,
      }
    default:
      return state
  }
}

export const addCartItemActionCreator = (itemToAdd) => ({
  type: ADD_CART_ITEM,
  payload: itemToAdd,
})

export const incrementCartItemQuantityAC = (itemToAddQuantity) => ({
  type: INCREMENT_CART_ITEM_QUANTITY,
  payload: itemToAddQuantity,
})

export const decrementCartItemQuantityAC = (itemToDecreaseQuantity) => ({
  type: DECREMENT_CART_ITEM_QUANTITY,
  payload: itemToDecreaseQuantity,
})

const getShopDataAC = (shopData) => ({
  type: GET_SHOP_DATA,
  payload: shopData,
})

export const getShopData = () => {
  return async (dispatch) => {
    try {
      debugger
      const response = await Axios('/shop')
      dispatch(getShopDataAC(response.data))
    } catch (err) {
      console.log(err)
    }
  }
}
