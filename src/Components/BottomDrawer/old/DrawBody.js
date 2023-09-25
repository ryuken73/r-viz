import React from 'react';
import styled from 'styled-components';
import F2 from 'Components/Chart/F2';

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 40px auto;
  color: white;
  pointer-events: none;
  @media (min-width: 768px) {
    border-radius: 0;
  }

`

function DrawBody() {
  return (
    <Container>
      <F2></F2>
    </Container>
  )
}

export default React.memo(DrawBody);
