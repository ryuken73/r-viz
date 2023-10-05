import React from 'react';
import styled from 'styled-components';
import useAppState from 'hooks/useAppState';
import {
  BigNumber,
  TopHeroContent
} from 'Components/Common/StyleDefs';
import AnimatedNumberWithDot from 'Components/Common/AnimatedNumberWithDot';

const Container = styled.div`
  margin-top: 10px;
  z-index: 10;
`
function TopHero(props) {
  const {totalRecv = 0} = props;
  const {opacityHero} = useAppState();
  const baseNumberSize = 5;
  return (
    <Container>
      <TopHeroContent>
        <BigNumber size={baseNumberSize} flex={5} opacity={opacityHero}>
          <AnimatedNumberWithDot to={totalRecv} postfix="명" postfixSize={1} />
        </BigNumber>
      </TopHeroContent>
    </Container>
  )
}

export default React.memo(TopHero);
