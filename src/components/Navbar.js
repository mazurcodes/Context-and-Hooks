import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';
import styled from 'styled-components';

const NavbarComponent = styled.div`
  padding: 20px 20px;
  text-align: center;
  background: ${({theme}) => theme.colors.navbarBg};
  margin: 0;
`;

const NavbarH1 = styled.h1`
  padding-bottom: 10px;
`;

const Navbar = () => {
  const {books} = useContext(BookContext);
  return (
    <NavbarComponent>
      <NavbarH1>Bartek's Reading List</NavbarH1>
      <p>Currently on my list: { books.length } book(s)</p>
    </NavbarComponent>
  )
}

export default Navbar;

