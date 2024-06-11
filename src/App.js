import React from 'react';
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Spline from '@splinetool/react-spline';
import styled from 'styled-components'; // Importar styled-components

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <SplineContainer>
        <Spline scene="https://prod.spline.design/4FHjDcPcR6Elyosq/scene.splinecode" />
      </SplineContainer>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

const SplineContainer = styled.div`
  width: 100%;
  height: 600px; // Ajusta según sea necesario
  margin: 20px 0;
  background-color: #1c1c1c; // Fondo oscuro para integrar con el diseño
`;

export default App;
