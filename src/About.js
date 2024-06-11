// src/About.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 20px;
  text-align: center;
  background-color: #2c2c2c;
  border-radius: 8px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <h2>About Me</h2>
      <p>Welcome to my portfolio! I'm a passionate developer with experience in 3D interfaces and web development.</p>
    </AboutContainer>
  );
};

export default About;
