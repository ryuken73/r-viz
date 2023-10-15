import React from 'react';
import styled from 'styled-components';
import {TextNormal} from 'Components/Common/StyleDefs';
import ParallaxBox from 'Components/Common/ParallaxBox';
import TopHero from 'Components/ProgramPage/TopHero';

const Container = styled.div`
  position: relative;
  padding-top: 4vh;
  padding-bottom: 4vh;
  visibility: ${props => props.hide && 'hidden'};
  /* height: 300px; */
  color: ${props => props.isOnair ? 'yellow !important' : 'white'};
  /* transform: translateY(30%); */
`

function TopTitle(props) {
  const {isOnair, hide, summaryText, currentPercentage, totalRecv=12345} = props;
  const color = isOnair ? 'moccasin' : 'lightblue';
  return (
    <Container isOnair={isOnair} hide={hide}>
      <TextNormal color={color}>{summaryText}</TextNormal>
      <TopHero 
        color={color}
        currentPercentage={currentPercentage}
        totalRecv={totalRecv}
      ></TopHero>
    </Container>
  )
}

export default React.memo(TopTitle);
