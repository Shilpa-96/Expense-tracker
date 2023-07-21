import { createContext, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "Delete":
      return state.filter((item) => item.id !== action.payload);
    case "Add":
      console.log(action.payload);
      return [...state, action.payload];

    default:
      return state;
  }
};

const transaction = [];

export const myContext = createContext(null);

export const ContextProvider = ({ children }) => {
  const handleAdd = (trans) => {
    dispatch({ type: "Add", payload: trans });
  };
  const handleDelete = (id) => {
    dispatch({ type: "Delete", payload: id });
  };

  const [transactions, dispatch] = useReducer(reducer, transaction);
  return (
    <myContext.Provider value={{ transactions, handleDelete, handleAdd }}>
      {children}
    </myContext.Provider>
  );
};
