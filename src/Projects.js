// src/Projects.js
import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
  padding: 20px;
  text-align: center;
  background-color: #2c2c2c;
  border-radius: 8px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <h2>Projects</h2>
      <p>Here are some of my recent projects:</p>
      {/* Aquí puedes añadir enlaces a tus proyectos o una galería */}
    </ProjectsContainer>
  );
};

export default Projects;
