/** @format */

import { createContext, useContext, useReducer } from "react";
import { reducer } from "../reducer/reducer";
import allData from "../data/CardData.json";
const mainContext = createContext();

const initialState = {
  currentUserid: 4,
  allData: [],
  view: "grid",
  cardType: [],
  cardHolder: "default",
  modal: false,
  filteredData: [],
};

export const MainContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <mainContext.Provider value={{ ...state, dispatch }}>
      {children}
    </mainContext.Provider>
  );
};

export const useMainContext = () => {
  return useContext(mainContext);
};
