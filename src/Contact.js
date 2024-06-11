// src/Contact.js
import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 20px;
  text-align: center;
  background-color: #2c2c2c;
  border-radius: 8px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <h2>Contact</h2>
      <p>Feel free to reach out to me on my social media or send me an email!</p>
      {/* Aquí puedes añadir enlaces a tus redes sociales o un formulario de contacto */}
    </ContactContainer>
  );
};

export default Contact;
