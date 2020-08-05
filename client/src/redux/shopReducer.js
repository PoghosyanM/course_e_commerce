import {
  addedItem,
  incrementCartItemQuantity,
  decrementCartItemQuantity,
} from './helpers'
import Axios from 'axios'

const INITIAL_STATE = {
  shopData: {},
  cart: [],
  error: null,
}

const ADD_CART_ITEM = 'ADD_CART_ITEM'
const INCREMENT_CART_ITEM_QUANTITY = 'INCREMENT_CART_ITEM_QUANTITY'
const DECREMENT_CART_ITEM_QUANTITY = 'DECREMENT_CART_ITEM_QUANTITY'
const GET_SHOP_DATA = 'GET_SHOP_DATA'
const SET_SHOP_DATA_START = 'SET_SHOP_DATA_START'
const SET_SHOP_DATA_SUCCESS = 'SET_SHOP_DATA_SUCCESS'
const SET_SHOP_DATA_FAILURE = 'SET_SHOP_DATA_FAILURE'

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
    case SET_SHOP_DATA_SUCCESS:
      return {
        ...state,
        shopData: action.payload,
        error: null,
      }
    case SET_SHOP_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
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

const setShopDataStart = () => ({
  type: SET_SHOP_DATA_START,
})

const setShopDataSuccess = (shopData) => ({
  type: SET_SHOP_DATA_SUCCESS,
  payload: shopData,
})

const shopDataFailure = (error) => ({
  type: SET_SHOP_DATA_FAILURE,
  payload: error,
})

export const getShopData = () => {
  return async (dispatch) => {
    try {
      const response = await Axios('/shop')
      dispatch(getShopDataAC(response.data))
    } catch (err) {
      dispatch(shopDataFailure(err))
    }
  }
}

export const setShopData = ({ name, price, imageUrl, category }) => {
  return async (dispatch) => {
    dispatch(setShopDataStart())
    try {
      const response = await Axios.post('/addItem', {
        name,
        price,
        imageUrl,
        category,
      })
      dispatch(setShopDataSuccess(response.data))
    } catch (err) {
      dispatch(shopDataFailure(err))
    }
  }
}
