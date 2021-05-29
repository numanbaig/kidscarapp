import { CART, CATEGORY } from "./actionType";
export const reducer = (state, action) => {
  switch (action.type) {
    case CART:
      return {
        ...state,
        cart: action.payload,
      };
    case CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};
