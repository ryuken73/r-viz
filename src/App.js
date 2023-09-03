import React from 'react';
import styled from 'styled-components';
import SimplePage from 'Components/ProgramPage/SimplePage' ;
import Footer from 'Components/Footer';
import './App.css';

const Container = styled.div``

function App() {
  return (
    <Container>
      <SimplePage />
      <Footer />
    </Container>
  );
}

export default React.memo(App);
