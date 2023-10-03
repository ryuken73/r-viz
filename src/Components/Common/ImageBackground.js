import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`
const ImageContainer = styled.div`
  position: absolute;
`
const StyledImage = styled.img`
  /* filter: brightness(0.15) grayscale(10%) !important; */
  width: 200%;
  object-fit: cover;
  object-position: top right;
  filter: brightness(0.15) !important;
  transform: rotate(90deg) scale(4);
`

function ImageBackground(props) {
  const {image, handleScroll, children} = props
  return (
    <Container>
      <ImageContainer>
        <StyledImage src={image} />
      </ImageContainer>
      {children}
    </Container>
  )
}

export default React.memo(ImageBackground);