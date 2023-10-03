import React from 'react';
import styled from 'styled-components';
import SwiperView from 'Components/SwiperView';
import SplideView from 'Components/SpliderView';
import Footer from 'Components/Footer';
import useAppState from 'hooks/useAppState';
import {throttle} from 'utils';
import './App.css';

const Container = styled.div`
  background: black;
`

function App() {
  console.log('re-render app')
  const {showSummary, setShowSummaryState} = useAppState();
  const handleScroll = React.useCallback((event) => {
    const scrollTop = event.target.scrollingElement.scrollTop;
    console.log(scrollTop, window.scrollY)
    if(window.scrollY > 180 && showSummary === false){
      console.log('set true')
      setShowSummaryState(true);
    } 
    if(window.scrollY < 180 && showSummary === true){
      console.log('set false')
      setShowSummaryState(false);
    }
  }, [setShowSummaryState, showSummary])
  // const onChangePercentage = React.useCallback(() => {
  //   return throttle(handleScroll, 50);
  // }, [handleScroll]) 
  const onChangePercentage = throttle(handleScroll, 50);

  React.useEffect(() => {
    window.addEventListener('scroll', onChangePercentage);
    return () => {
      window.removeEventListener('scroll', onChangePercentage)
    }
  }, [onChangePercentage])

  return (
    <Container>
      {/* <SwiperView /> */}
      <SplideView />
      <Footer />
    </Container>
  );
}

export default React.memo(App);
