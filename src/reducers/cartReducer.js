import { ADD_TO_CART } from "../actions/cartAction"

const initialState = {
  cart: []
}

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const updatedState = [...state.cart, action.payload]
      return{
        ...state,
        cart:updatedState
      }
    default:
      return state
  }
}