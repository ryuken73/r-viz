import React from 'react';
import styled from 'styled-components';
import {throttle} from 'utils';
import { Parallax, Background } from 'react-parallax';

const StyledImage = styled.img`
  filter: brightness(0.3) grayscale(10%) !important;
  transform: rotate(80deg) scale(1.5) translateY(10%);
`
const StyledParallax = styled(Parallax)`
    width: 100%;
    margin-left: auto;
    box-sizing: border-box;
    margin-right: auto;
    display: block;
    padding-left: 16px;
    padding-right: 16px;
    overflow: unset !important;
    contain: paint;
    background-color: ${props => props.overflowColor};
    .react-parallax-background-children {
      -webkit-transform-style: preserve-3d;
      -webkit-backface-visibility: hidden;
    }
`
const Container = styled.div`
    overflow: unset !important;
`

function ParallaxImage(props) {
  const {image, overflowColor='black', handleScroll, children} = props;
  const onChangePercentage = throttle(handleScroll, 50);

  return (
    <StyledParallax
      strength={500}
      renderLayer={(percentage) => {
        onChangePercentage(percentage)
        return <dv></dv>
      }}
      overflowColor={overflowColor}
    >
      <Background>
        <StyledImage src={image} />
      </Background>
      <Container>
        {children}
      </Container>
    </StyledParallax>
  )
}

export default React.memo(ParallaxImage);
