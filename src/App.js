import React from 'react';
import styled from 'styled-components';
import SplideView from 'Components/SpliderView';
import SwipeableView from 'Components/SwipeableView';
import Footer from 'Components/Footer';
import useAppState from 'hooks/useAppState';
import {throttle} from 'utils';
import './App.css';

const Container = styled.div`
  background: black;
`
const TopSticky = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: white;
  z-index: -1;
  text-align: center;
  background: green;
  height: 3rem;
`

function App() {
  console.log('re-render app')
  const {
    showSummary, 
    setShowSummaryState, 
    setOpacityHeroState
  } = useAppState();
  const handleScroll = React.useCallback((event) => {
    if(window.scrollY > 180 && showSummary === false){
      console.log('set true')
      setShowSummaryState(true);
    } 
    if(window.scrollY < 180 && showSummary === true){
      console.log('set false')
      setShowSummaryState(false);
    }
    const opacityHero = (130-window.scrollY)/130;
    if(opacityHero >= 0){
      setOpacityHeroState(opacityHero)
    }
  }, [setOpacityHeroState, setShowSummaryState, showSummary])
  // const onChangePercentage = React.useCallback(() => {
  //   return throttle(handleScroll, 50);
  // }, [handleScroll]) 
  const onChangePercentage = throttle(handleScroll, 50);

  React.useEffect(() => {
    // window.addEventListener('scroll', onChangePercentage);
    // return () => {
    //   window.removeEventListener('scroll', onChangePercentage)
    // }
  }, [onChangePercentage])

  return (
    <Container>
      {/* <TopSticky>
      </TopSticky> */}
      {/* <SplideView /> */}
      <div>aaa</div>
      <SwipeableView />
      <Footer />
    </Container>
  );
}

export default React.memo(App);
