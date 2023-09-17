import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProgramPage from 'Components/ProgramPage';
import background1 from 'resources/Cul2.jpg';
import background2 from 'resources/ji.jpg';
import background3 from 'resources/parkso.jpg';

import 'swiper/css';

function SwiperView(props) {
  const {pages=[background1, background2, background3]} = props;
  return (
    <Swiper
      speed={150}
      noSwipingClass='noSwiping'
    >
      {pages.map(page => (
        <SwiperSlide key={page}>
          <ProgramPage
            programImage={page}
          ></ProgramPage>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default React.memo(SwiperView);