import React from 'react';
import styled from 'styled-components';
import {debounce} from 'lodash';
import useAppState from 'hooks/useAppState';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.2rem;
  background: black;
  position: relative;
  border: 1px solid white;
  border-radius: 8px;
  color: white;
  box-sizing: border-box;
  /* width: fit-content; */
  width: 100%;
  height: 2rem;
  margin: 0 auto;
  font-size: 0.8rem;
  font-weight: bold;
`
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 4rem; */
  width: 100%;
  height: 1.5rem;
  text-align: center;
  box-sizing: border-box;
  border-radius: 10px;
  z-index: 2;
`
const Sliding = styled.div`
  position: absolute;
  z-index: 1;
  background-color: darkslategray;
  height: 1.5rem;
  width: ${props => `calc(${props.sliderWidth}px - 0.1rem)`};
  border-radius: 5px;
  box-sizing: border-box;
  transition: 0.25s ease-out;
`

const itemList = {
  'daily': '1일',
  'weekly': '1주',
  'monthly': '1개월',
  'halfYearly': '6개월',
  'yearly': '1년'
}

function SlidingRadio() {
  const {globalPeriod, setGlobalPeriodState} = useAppState();
  const [sliderWidth, setSliderWidth] = React.useState('0px');
  const containerRef = React.useRef(null);
  const slideRef = React.useRef(null);

  const debouncedChange = debounce(() => {
    const clientRect = containerRef.current.getBoundingClientRect();
    setSliderWidth(clientRect.width / 5);
  }, 100)

  const resizeSlider = React.useCallback(() => {
    if(containerRef.current === null) return;
    debouncedChange();
  }, [debouncedChange])

  React.useEffect(() => {
    resizeSlider();
  }, [resizeSlider])

  React.useEffect(() => {
    window.addEventListener('resize', resizeSlider, {passive: true})
    return () => {
      window.removeEventListener('resize', resizeSlider);
    }
  }, [resizeSlider])

  React.useEffect(() => {
    const index = Object.keys(itemList).findIndex(period => period === globalPeriod);
    if(typeof(index) === 'undefined' || index.length === 0) return;
    slideRef.current.style.transform = `translateX(${index * 100}%)`;
  }, [globalPeriod])

  const onClickItem = React.useCallback((event) => {
    const index = event.target.id;
    if(typeof(index) === 'undefined' || index.length === 0) return;
    const currentPeriod = Object.keys(itemList)[index];
    slideRef.current.style.trancontainerRefsform = `translateX(${index * 100}%)`;
    setGlobalPeriodState(currentPeriod);
  }, [setGlobalPeriodState])

  return (
    <Container ref={containerRef} onClick={onClickItem}>
      {Object.keys(itemList).map((key, index) => (
        <Item key={key} id={index}>
          <div id={index}>
            {itemList[key]}
          </div>
        </Item>
      ))}
      <Sliding ref={slideRef} sliderWidth={sliderWidth}></Sliding>
    </Container>
  )
}

export default React.memo(SlidingRadio);
