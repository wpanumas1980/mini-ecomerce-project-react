export const ADD_TO_CART = 'ADD_TO_CART';


export function addToCart(addedProduct) {
  return {
    type:ADD_TO_CART,
    payload:addedProduct
  }
} 