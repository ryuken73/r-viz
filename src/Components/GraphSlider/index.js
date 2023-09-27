import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';
// import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

function GraphSlider() {
  return (
    <Splide 
      aria-label="My Favorite Images"
      perPage={2}
    >
      <SplideSlide>
        a
      </SplideSlide>
      <SplideSlide>
        b
      </SplideSlide>
      <SplideSlide>
        a
      </SplideSlide>
      <SplideSlide>
        b
      </SplideSlide>
    </Splide>
  )
}

export default React.memo(GraphSlider);