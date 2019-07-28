import React, { createContext, useReducer, useEffect } from "react";
import { bookReducer } from "../reducers/BookReducer";

export const BookContext = createContext();

  // INITIAL VALUE FOR REDUCER lazy initial
  // check if there are books in local storage... if not then return empty array
const localBooks = () => {
  return localStorage.getItem("books")
    ? JSON.parse(localStorage.getItem("books"))
    : [];
};

const BookContextProvider = props => {

  const [books, dispatch] = useReducer(bookReducer, [], localBooks);

  // update local storage only if {books} has changed...
  useEffect(() => localStorage.setItem("books", JSON.stringify(books)), [
    books
  ]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
