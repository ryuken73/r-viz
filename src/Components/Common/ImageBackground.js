import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  padding-left: 4vw;
  padding-right: 4vw;
  box-sizing: border-box;
  background-color: ${props => props.overflowColor};
`
const ImageContainer = styled.div`
  position: absolute;
`
const StyledImage = styled.img`
  /* filter: brightness(0.15) grayscale(10%) !important; */
  /* width: 330%; */
  object-fit: cover;
  object-position: top right;
  filter: brightness(0.15) !important;
  transform: rotate(90deg) scale(1) translateY(18.5%);
`

function ImageBackground(props) {
  const {image, children, overflowColor="black"} = props
  return (
    <Container
      overflowColor={overflowColor}
    >
      <ImageContainer>
        <StyledImage src={image} />
      </ImageContainer>
      {children}
    </Container>
  )
}

export default React.memo(ImageBackground);