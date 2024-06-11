// src/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #1c1c1c, #333333);
  color: white;
  padding: 40px 20px;
  text-align: center;
  position: relative;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-top: 20px;
  border: 5px solid #00d8ff;
`;

const Name = styled.h1`
  font-size: 48px;
  margin: 20px 0 10px;
  font-weight: bold;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #00d8ff;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s;

  &:hover {
    color: #00d8ff;
  }
`;

const CallToAction = styled.button`
  background-color: #00d8ff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #007ea7;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Navbar>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </Navbar>
      <ProfileImage src="Damian.jpg" alt="Profile" />
      <Name>James Walter</Name>
      <Title>Senior Designer</Title>
      <CallToAction>Contact Me</CallToAction>
    </HeaderContainer>
  );
};

export default Header;
