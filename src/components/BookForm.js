import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext';
import styled from 'styled-components';

const StyledFrom = styled.form`
  padding: 20px;
  border-top: 1px solid #6d3d6d;
`;

const BookInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background: #6d3d6d;
  color: white;
  border-radius: 5px;
  border: none;
  ::placeholder {
    color: #aaa;
  }
`;

const FormSubmitBtn = styled.input`
  display: block;
  width: 20%;
  margin: 10px auto;
  padding: 10px;
`;

const BookForm = () => {
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
    <StyledFrom onSubmit={submitHandler}>
      <BookInput type="text" placeholder="Enter title" value={title} onChange={titleHandler} required />
      <BookInput type="text" placeholder="Enter author" value={author} onChange={authorHandler} required />
      <FormSubmitBtn type="submit" value="Add book"/>
    </StyledFrom>
  )
}

export default BookForm