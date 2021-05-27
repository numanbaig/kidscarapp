import { CART } from "./actionType";
export const reducer = (state, action) => {
  switch (action.type) {
    case CART:
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};
