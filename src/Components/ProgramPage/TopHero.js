import React from 'react';
import styled from 'styled-components';
import {
  BigNumber,
  TextSmall,
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
      <TextSmall>현재 동시 청취자수</TextSmall>
      <TopHeroContent>
        <BigNumber size={20} flex={5}>
          <AnimatedNumber number={totalRecv} postfix={"11명"} />
        </BigNumber>
      </TopHeroContent>
    </Container>
  )
}

export default React.memo(TopHero);
