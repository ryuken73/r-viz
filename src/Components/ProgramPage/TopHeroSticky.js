import React from 'react';
import styled from 'styled-components';
import {
  BigNumber,
  TextNormal,
  TopHeroContent
} from 'Components/Common/StyleDefs';
import AnimatedNumber from 'Components/Common/AnimatedNumber';

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  backdrop-filter: blur(20px);
`

function TopHero(props) {
  const {totalRecv = 0} = props;
  return (
    <Container>
      <TextNormal>현재 동시 청취자수</TextNormal>
      <TopHeroContent5
        <BigNumber size={1} flex={5}>
          <AnimatedNumber number={totalRecv} postfix={"11명"} />
        </BigNumber>
      </TopHeroContent>
    </Container>
  )
}

export default React.memo(TopHero);
