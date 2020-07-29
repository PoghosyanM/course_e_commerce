const INITIAL_STATE = {
  cart: [],
}

const ADD_CART_ITEM = 'ADD_CART_ITEM'

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      const addedItem = (chosenItem, cart) => {
        const isExistChosenItemInCart = cart.some(
          (item) => item.id === chosenItem.id
        )
        if (isExistChosenItemInCart) {
          return cart
        }
        return [...cart, { ...chosenItem, quantity: 1 }]
      }
      return {
        ...state,
        cart: addedItem(action.payload, state.cart),
      }
    default:
      return state
  }
}

export const addCartItemActionCreator = (itemToAdd) => ({
  type: ADD_CART_ITEM,
  payload: itemToAdd,
})
