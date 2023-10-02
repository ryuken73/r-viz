import React from 'react';
import styled from 'styled-components';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import ProgramPage from 'Components/ProgramPage';
import background1 from 'resources/Cul2.jpg';
import background2 from 'resources/ji.jpg';
import background3 from 'resources/parkso.jpg';

const CustomSplide = styled(Splide)`
  padding: ${props => props.padding || `1em !important`};
  width: 100%;
`
const CustomSplideTrack = styled(SplideTrack)`
  overflow: clip;
  width: 100%;
  ul {
    width: 100%;
    li {
      width: 100%;
    }
  }
`
function SpliderView(props) {
  const {pages=[background1, background2, background3]} = props;
  return (
    <CustomSplide
      options = {{
        arrows: false,
        perPage: 1,
        pagination: false
      }}
      padding="0em"
      hasTrack={false}
      tag="section"
    >
      <CustomSplideTrack>
        {pages.map(page => (
          <SplideSlide 
            key={page}
          >
            <ProgramPage
              programImage={page}
            ></ProgramPage>
          </SplideSlide>
        ))}
      </CustomSplideTrack>
    </CustomSplide>
  )
}

export default React.memo(SpliderView);