
import React, { createContext, useState } from 'react'

export const BookContext = createContext();

const BookContextProvider = (props) => {

  const [books, setBooks] = useState([
    {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
    {title: 'final empire', author: 'brandon sanderson', id: 2},
  ])

  const addBook = (title, author) => {
    const id = Date.now();
    setBooks([...books, {title, author, id}])
  }

  const removeBook = (id) => {
    const booksArr = books.filter(books => books.id !== id);
    setBooks(booksArr);
  }
  return (
    <BookContext.Provider value={{books, addBook, removeBook}}>
      {props.children}     
    </BookContext.Provider>
  )
}

export default BookContextProvider
