import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext';

const BookForm = (props) => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const titleHandler = (e) => {
    setTitle(e.target.value)
  }
  const authorHandler = (e) => {
    setAuthor(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_BOOK', book: {title, author}});
    setTitle('');
    setAuthor('');
  }

  return (
    <form className="book-form" onSubmit={submitHandler}>
      <input className="book-form-input" type="text" placeholder="Enter title" value={title} onChange={titleHandler} required />
      <input className="book-form-input" type="text" placeholder="Enter author" value={author} onChange={authorHandler} required />
      <input className="book-submit-btn" type="submit" value="Add book"/>
    </form>
  )
}

export default BookForm