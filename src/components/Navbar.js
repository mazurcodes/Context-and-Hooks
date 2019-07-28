import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';


const Navbar = (props) => {
  const {books} = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Bartek's Reading List</h1>
      <p>Currently on my list: { books.length } book(s)</p>
    </div>
  )
}

export default Navbar;

