import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 40px auto;
  @media (min-width: 768px) {
    border-radius: 0;
  }

`

function DrawBody() {
  return (
    <Container>DrawBody</Container>
  )
}

export default React.memo(DrawBody);
