import React from 'react';
import styled from 'styled-components';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import AreaChart from 'Components/Chart/AreaChart';
// import '@splidejs/react-splide/css';
// import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import { Preview } from '@mui/icons-material';

const Container = styled.div`
  visibility: ${props => props.show ? 'visible' : 'hidden'};
`
const CustomSplidePeriod = styled(Splide)`
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  padding: ${props => props.padding || `1em !important`};
`
const CustomSplideChart = styled(CustomSplidePeriod)`
  ul {
    li {
      width: 100% !important;
    }
  }
`
const CustomSlide = styled(SplideSlide)`
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  text-align: center;
`
const TextContainer = styled.div``;

const dailyData = [
  {
    dayOfWeek: 'Mon',
    dayNumber: 10,
    message: 'Monday Summary'
  },
  {
    dayOfWeek: 'Tue',
    dayNumber: 11,
    message: 'TuesDay Summary'
  },
  {
    dayOfWeek: 'Wed',
    dayNumber: 12,
    message: 'Wednesday Summary'
  },
  {
    dayOfWeek: 'Thr',
    dayNumber: 13,
    message: 'Thursday Summary'
  },
  {
    dayOfWeek: 'Fri',
    dayNumber: 14,
    message: 'Friday Summary'
  },
  {
    dayOfWeek: 'Sat',
    dayNumber: 15,
    message: 'Saturday Summary'
  },
  {
    dayOfWeek: 'Sun',
    dayNumber: 16,
    message: 'Sunday Summary'
  },
]


function GraphSlider(props) {
  const { show } = props;
  const mainRef = React.useRef(null);
  const dayRef = React.useRef(null);
  React.useEffect(() => {
    if(mainRef.current === null || dayRef.current === null){
      return;
    }
    mainRef.current.sync(dayRef.current.splide);
  }, [])
   
  return (
    <Container show={show}>
      <CustomSplidePeriod 
        options = {{
          arrows: false,
          perPage: 7,
          pagination: false
        }}
        ref={dayRef}
        hasTrack={false}
        tag="section"
        show={show}
      >
        <SplideTrack>
          {dailyData.map(day => (
            <CustomSlide 
              key={day.dayNumber} 
              show={show}
            >
              {day.dayOfWeek}
            </CustomSlide>
          ))}
        </SplideTrack>
      </CustomSplidePeriod>
      <CustomSplideChart
        options={{
          arrows: false,
          pagination: false
        }}
        ref={mainRef}
        hasTrack={false}
        tag="section"
        padding="0em"
        show={show}
      >
        <SplideTrack>
          {dailyData.map(day => (
            <CustomSlide 
              key={day.dayNumber}
              show={show}
            >
              <AreaChart></AreaChart>
              <TextContainer>
                <h2>{day.message}</h2>
              </TextContainer>
            </CustomSlide>
          ))}
        </SplideTrack>
      </CustomSplideChart>
    </Container>
  )
}

export default React.memo(GraphSlider);