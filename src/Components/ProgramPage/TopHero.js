import React from 'react';
import styled from 'styled-components';
import {
  BigNumber,
  TextNormal,
  TopHeroContent
} from 'Components/Common/StyleDefs';
import AnimatedNumberWithDot from 'Components/Common/AnimatedNumberWithDot';

const Container = styled.div`
  /* position: sticky;
  top: 0;
  left: 0; */
  margin-top: 10px;
  z-index: 10;
`
const FROM_EFFECT_START = 10;
const TO_EFFECT_START = 200;
function TopHero(props) {
  const {totalRecv = 0, currentPercentage} = props;
  const baseNumberSize = 5;
  const opacity = (1.04 - currentPercentage) / (1.04 - 0.90);
  return (
    <Container>
      <TopHeroContent>
        {/* <BigNumber size={baseNumberSize*ratio} flex={5} opacity={ratio}> */}
          {/* <AnimatedNumber number={totalRecv} postfix="명" postfixSize={basePostfixSize*ratio} /> */}
        <BigNumber size={baseNumberSize} flex={5} opacity={opacity}>
          {/* <AnimatedNumber number={totalRecv} postfix="명" postfixSize={basePostfixSize} /> */}
          <AnimatedNumberWithDot to={totalRecv} postfix="명" postfixSize={1} />
        </BigNumber>
      </TopHeroContent>
    </Container>
  )
}

export default React.memo(TopHero);
