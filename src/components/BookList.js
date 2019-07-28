import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';


const BookList = (props) => {
  const {books} = useContext(BookContext);
  
  const listOfBooks = books.length ? books.map(book => <BookDetails book={book} key={book.id}/>) : "No books yet :)"
  return (
    <ul className="book-list">
      {listOfBooks}
    </ul>
  )
}

export default BookList;