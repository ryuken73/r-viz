import React from 'react';
import styled from 'styled-components';
import {TextSmall} from 'Components/Common/StyleDefs';
import ParallaxBox from 'Components/Common/ParallaxBox';
import TopHero from 'Components/ProgramPage/TopHeroNoSticky';

const Container = styled.div`
  position: relative;
  height: 300px;
  color: white;
  transform: translateY(30%);
`

function TopTitle(props) {
  const {currentPx, setShowSummary, totalRecv=12345} = props;
  return (
    // <ParallaxBox speed={-30}>
      <Container>
        <TextSmall>현재 동시 청취자수</TextSmall>
        <TopHero 
          currentPx={currentPx} 
          setShowSummary={setShowSummary}
          totalRecv={totalRecv}
        ></TopHero>
      </Container>
    // </ParallaxBox>
  )
}

export default React.memo(TopTitle);
