export const addedItem = (chosenItem, cart) => {
  const isExistItem = cart.some((item) => item.id === chosenItem.id)
  if (isExistItem) {
    return cart
  }
  return [...cart, { ...chosenItem, quantity: 1 }]
}

export const incrementCartItemQuantity = (itemToAddQuantity, cart) => {
  return cart.map((item) => {
    if (item.id === itemToAddQuantity.id) {
      return {
        ...itemToAddQuantity,
        quantity: itemToAddQuantity.quantity + 1,
      }
    }
    return item
  })
}

export const decrementCartItemQuantity = (itemToDecreaseQuantity, cart) => {
  if (itemToDecreaseQuantity.quantity === 1) {
    return cart.filter((item) => item.id !== itemToDecreaseQuantity.id)
  }
  return cart.map((item) => {
    if (item.id === itemToDecreaseQuantity.id) {
      return {
        ...itemToDecreaseQuantity,
        quantity: itemToDecreaseQuantity.quantity - 1,
      }
    }
    return item
  })
}
