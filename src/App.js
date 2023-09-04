import React from 'react';
import styled from 'styled-components';
import SwiperView from 'Components/SwiperView';
import Footer from 'Components/Footer';
import './App.css';

const Container = styled.div``

function App() {
  return (
    <Container>
      <SwiperView />
      <Footer />
    </Container>
  );
}

export default React.memo(App);
