import React, { createContext, useReducer } from "react";
import reducer from "./reducer";
export const Store = createContext();
const initialState = {
  token: null,
};

const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};
export default StoreProvider;
