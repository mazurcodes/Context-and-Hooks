import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import styled from 'styled-components';

const StyledBookItem = styled.li`
  background: #6d3d6d;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  margin: 10px 10px;
  :hover {
    text-decoration: line-through;
    opacity: 0.7;
  }
`;

const BookAuthor = styled.p`
  font-style: italic;
`;


const BookDetails = (props) => {
  const { dispatch } = useContext(BookContext);
  const { title, author, id } = props.book;
  return (
    <StyledBookItem onClick={() => dispatch({type: 'REMOVE_BOOK', removeBookID: id})}>
      <h3>{title}</h3>
      <BookAuthor>{author}</BookAuthor>
    </StyledBookItem>
  );
};

export default BookDetails;
