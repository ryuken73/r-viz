import React from 'react';
import styled from 'styled-components';
import SwiperView from 'Components/SwiperView';
import SplideView from 'Components/SpliderView';
import Footer from 'Components/Footer';
import './App.css';

const Container = styled.div`
  background: black;
`

function App() {
  return (
    <Container>
      {/* <SwiperView /> */}
      <SplideView />
      <Footer />
    </Container>
  );
}

export default React.memo(App);
