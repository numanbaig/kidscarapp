import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";
const initialState = {
  cart: [],
};
export const Store = createContext(initialState);
const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};
export default StoreProvider;
