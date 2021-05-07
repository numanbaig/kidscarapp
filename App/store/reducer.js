import { TOKEN } from "./actionType";

export const reducer = (state, action) => {
  switch (action.type) {
    case TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    default:
      return state;
  }
};
