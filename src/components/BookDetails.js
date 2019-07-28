import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookDetails = props => {
  const { removeBook } = useContext(BookContext);
  const { title, author, id } = props.book;
  return (
    <li onClick={() => removeBook(id)}>
      <h3 className="book-title">{title}</h3>
      <p className="book-author">{author}</p>
    </li>
  );
};

export default BookDetails;
