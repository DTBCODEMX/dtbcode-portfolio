// src/Navbar.js
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #282c34;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 10px;
  
  &:hover {
    background: #444;
    border-radius: 5px;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLink href="#about">About</NavLink>
      <NavLink href="#projects">Projects</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </Nav>
  );
};

export default Navbar;
