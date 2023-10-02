import React from 'react';
import styled from 'styled-components';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import AreaChart from 'Components/Chart/AreaChart';
// import '@splidejs/react-splide/css';
// import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

const Container = styled.div``
const CustomSplide = styled(Splide)`
  padding: ${props => props.padding || `1em !important`};
`
const CustomSplideChart = styled(CustomSplide)`
  ul {
    li {
      width: 100% !important;
    }
  }
`
const CustomSlide = styled(SplideSlide)`
  text-align: center;
`

const DAYS = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun']
const GRAPHS = [1, 2, 3, 4, 5, 6, 7]

function GraphSlider() {
  const mainRef = React.useRef(null);
  const dayRef = React.useRef(null);
  React.useEffect(() => {
    if(mainRef.current === null || dayRef.current === null){
      return;
    }
    mainRef.current.sync(dayRef.current.splide);
  }, [])
   
  return (
    <Container>
      <CustomSplide 
        options = {{
          arrows: false,
          perPage: 7,
          pagination: false
        }}
        ref={dayRef}
        hasTrack={false}
        tag="section"
      >
        <SplideTrack>
          {DAYS.map(day => (
            <CustomSlide key={day}>
              {day}
            </CustomSlide>
          ))}
        </SplideTrack>
      </CustomSplide>
      <CustomSplideChart
        options={{
          arrows: false,
          pagination: false
        }}
        ref={mainRef}
        hasTrack={false}
        tag="section"
        padding="0em"
      >
        <SplideTrack>
          {GRAPHS.map(graph => (
            <CustomSlide key={graph}>
              <AreaChart></AreaChart>
            </CustomSlide>
          ))}
        </SplideTrack>

      </CustomSplideChart>
    </Container>
  )
}

export default React.memo(GraphSlider);