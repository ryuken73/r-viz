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
  color: white;
  /* transform: translateY(30%); */
`

function TopTitle(props) {
  const {hide, summaryText, currentPercentage, totalRecv=12345} = props;
  return (
    // <ParallaxBox speed={-30}>
      <Container hide={hide}>
        <TextNormal>{summaryText}</TextNormal>
        <TopHero 
          currentPercentage={currentPercentage}
          totalRecv={totalRecv}
        ></TopHero>
      </Container>
    // </ParallaxBox>
  )
}

export default React.memo(TopTitle);
