import React from 'react';
import styled from 'styled-components';
import {
  BigNumber,
  TextSmall,
  TopHeroContent
} from 'Components/Common/StyleDefs';
import AnimatedNumber from 'Components/Common/AnimatedNumber';

const Container = styled.div`
  /* position: sticky;
  top: 0;
  left: 0; */
  margin-top: 10px;
  z-index: 10;
`
const FROM_EFFECT_START = 100;
const TO_EFFECT_START = 200;
function TopHero(props) {
  const {totalRecv = 0, currentPx, setShowSummary} = props;
  const baseNumberSize = 20;
  const basePostfixSize = 2;
  const ratio = currentPx < FROM_EFFECT_START ? 1 : (TO_EFFECT_START - currentPx) / FROM_EFFECT_START
  if(ratio < 0){
    setShowSummary(true)
  } else {
    setShowSummary(false)
  }
  console.log(ratio, currentPx)
  return (
    <Container>
      <TopHeroContent>
        {/* <BigNumber size={baseNumberSize*ratio} flex={5} opacity={ratio}> */}
          {/* <AnimatedNumber number={totalRecv} postfix="명" postfixSize={basePostfixSize*ratio} /> */}
        <BigNumber size={baseNumberSize} flex={5} opacity={ratio}>
          <AnimatedNumber number={totalRecv} postfix="명" postfixSize={basePostfixSize} />
        </BigNumber>
      </TopHeroContent>
    </Container>
  )
}

export default React.memo(TopHero);
