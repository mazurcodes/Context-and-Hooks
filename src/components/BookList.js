import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";
import styled from 'styled-components';

const StyledBookList = styled.ul`
  padding: 10px;
  list-style: none;
`;

const BookList = () => {
  const { books } = useContext(BookContext);

  const listOfBooks = books.length
    ? books.map(book => <BookDetails book={book} key={book.id} />)
    : "No books yet :)";
  return <StyledBookList>{listOfBooks}</StyledBookList>;
};

export default BookList;
