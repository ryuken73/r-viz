import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { usePalette } from 'color-thief-react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import BottomDrawer from 'Components/BottomDrawer';
import DrawBody from 'Components/BottomDrawer/DrawBody';
import F2 from 'Components/Chart/F2';
import ParallaxBox from 'Components/Common/ParallaxBox';
import AnimatedNumber from 'Components/Common/AnimatedNumber';
import background1 from 'resources/Cul2.jpg';
import {throttle} from 'utils';

const HEADER_IMAGE_HEIGHT = '25vw';
const SHOW_HEADER_SCROLL_Y = 200;

const PageContainer = styled.div`
  position: relative;
  contain: paint;
  color: white;
  &:before {
    content: "";
    position: absolute;
    width: 400%;
    height: 100%;
    top: -50%;
    left: -50%;
    z-index: -1;
    background: black;
    background-image: ${props => `url(${props.programImage})`};
    background-blend-mode: hard-light;
    transform: rotate(90deg) scale(3);
    filter: grayscale(50%) brightness(0.4);
  };
`
const StyledContainer = styled(Container)` `
const TopHeader = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  height: ${HEADER_IMAGE_HEIGHT};
  z-index: 10;
  filter: grayscale(50%) brightness(0.9);
`
const StyledImage = styled.img`
  height: 100%;
  object-fit: cover;
`
const TopHero = styled.div`
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
`
const TopHeroContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const CommonDiv = styled.div`
  text-align: center;
  font-size: 1rem;
  border-radius: 5px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
`
const BigNumber = styled(CommonDiv)`
  flex: ${props => props.flex};
  background: transparent;
  font-size: ${props => props.size ? `${props.size}rem` : '2rem'};
`
const TextSmall = styled(CommonDiv)`
  flex: ${props => props.flex};
  font-size: ${props => props.size ? `${props.size}rem` : '1rem'};
`
const ScrollContainer = styled.div`
  /* transform: translateY(calc(25vw)); */
`
const SingleColumnBox = styled.div`
`;
const TowColumnBox = styled.div` `
const Header = styled(CommonDiv)`
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  margin-bottom: 0.05rem;
  position: -webkit-sticky;
  position: sticky;
  /* top: 0px; */
  top: 25vw;
  /* background: blue; */
  /* color: lightgrey; */
  z-index: 5;
`
const Contents = styled(CommonDiv)`
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
`
const Columns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
`
const GraphContainer = styled.div`
  width: 40vw;
  height: 40vh;
`
const GraphBox = styled.div`
  width: 45%;
`
const Card = styled.div`
  width: 100%;
  &:after {
    padding-bottom: 100%;
    content: "";
    display: block;
    background-color: transparent;
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    /* border: 1px solid black; */
  }
`

function ProgramPage(props) {
  const {programImage} = props;
  const backgroundImage = programImage || background1; 
  const [ showTopHeader, setShowTopHeader ] = React.useState(false);
  const [ drawOpen, setDrawerOpen ] = React.useState(false);
  const [ colors, setColors ] = React.useState([])
  const [ totalRecv, setTotalRecv ] = React.useState(1232)
  const containerRef = React.useRef(null);
  const { data, loading, error} = usePalette(backgroundImage, 5, 'rgbString');
  const [color1, color2, color3, color4, color5] = colors;

  React.useEffect(() => {
    if(loading === false && error === undefined){
      // document.body.style.cssText = `background: ${data[0]} !important`;  
      // containerRef.current.style.cssText = `background: ${data[0]} !important`;  
      containerRef.current.style.cssText = `background-image: ${backgroundImage} `
      setColors(data)
    }
  }, [data, error, loading])

  React.useEffect(() => {
    // const timer = setInterval(() => {
    //   setTotalRecv(totalRecv => {
    //     return totalRecv + parseInt((Math.random() * 1000).toFixed(0));
    //   })
    // }, 2000)
    // return () => {
    //   clearInterval(timer)
    // }
  }, [])

  const handleScroll = event => {
    const scrollY = document.documentElement.scrollTop
    if(scrollY > SHOW_HEADER_SCROLL_Y - 50){
      setShowTopHeader(true);
    } else {
      setShowTopHeader(false);
    }
  }

  const onScroll = throttle(handleScroll, 50);
  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, [onScroll])

  const toggleDrawer = React.useCallback(() => {
    setDrawerOpen(drawOpen => !drawOpen);
  }, [])

  return (
    <PageContainer ref={containerRef} programImage={programImage}>
      <CssBaseline />
      <TopHeader 
        show={showTopHeader}
      >
        <StyledImage src={backgroundImage}></StyledImage>
      </TopHeader> 
      <StyledContainer onScroll={handleScroll} maxWidth="lg">
      <TopHero onClick={toggleDrawer}>
        <TextSmall>현재 동시 시청자수</TextSmall>
        <TopHeroContent>
          <BigNumber size={5} flex={5}>
            <AnimatedNumber number={totalRecv} />
          </BigNumber>
          <TextSmall size={2} flex={1}>명</TextSmall>
        </TopHeroContent>
      </TopHero>
        <ScrollContainer>
          <SingleColumnBox color2={color2} color4={color4}>
            <Header>흐린상태XX</Header>
            <F2></F2>
            <BigNumber>100</BigNumber>
          </SingleColumnBox>
          <p></p>
          <SingleColumnBox height="long">
            <Header>흐린상태1</Header>
            <Contents>
              <Box>월요일</Box>
              <Box>화요일</Box>
              <Box>수요일</Box>
              <Box>목요일</Box>
              <Box>금요일</Box>
              <Box>토요일</Box>
              <Box>일요일</Box>
            </Contents>
          </SingleColumnBox>
          <p></p>
          <SingleColumnBox height="long">
            <Header>흐린상태2</Header>
            <Contents>Swans are birds of the family Anatidae within the genus Cygnus. The swans' close relatives include the geese and ducks. Swans are grouped with the closely related geese in the subfamily Anserinae where they form the tribe Cygnini. Sometimes, they are considered a distinct subfamily, Cygninae. There are six or seven living (and one extinct) species of swan in the genus Cygnus; in addition, there is another species known as the coscoroba swan, although this species is no longer considered one of the true swans. Swans usually mate for life, although “divorce” sometimes occurs, particularly following nesting failure, and if a mate dies, the remaining swan will take up with another. The number of eggs in each clutch ranges from three to eight.</Contents>
          </SingleColumnBox>
          <p></p>
          <Columns>
            <GraphBox>
              <Header>흐린상태3</Header>
              <Card></Card>
            </GraphBox>
            <GraphBox>
              <Header>흐린상태4</Header>
              <Card></Card>
            </GraphBox>
          </Columns>
          <p></p>
          <SingleColumnBox height="long">
            <Header>흐린상태</Header>
            <Contents>Swans are birds of the family Anatidae within the genus Cygnus. The swans' close relatives include the geese and ducks. Swans are grouped with the closely related geese in the subfamily Anserinae where they form the tribe Cygnini. Sometimes, they are considered a distinct subfamily, Cygninae. There are six or seven living (and one extinct) species of swan in the genus Cygnus; in addition, there is another species known as the coscoroba swan, although this species is no longer considered one of the true swans. Swans usually mate for life, although “divorce” sometimes occurs, particularly following nesting failure, and if a mate dies, the remaining swan will take up with another. The number of eggs in each clutch ranges from three to eight.</Contents>
          </SingleColumnBox>
          <p></p>
          <SingleColumnBox />
          <SingleColumnBox>
            <GraphContainer></GraphContainer>
          </SingleColumnBox>
          <TowColumnBox>
            <SingleColumnBox></SingleColumnBox>
            <SingleColumnBox></SingleColumnBox>
          </TowColumnBox>
          <TowColumnBox>
            <SingleColumnBox></SingleColumnBox>
            <SingleColumnBox></SingleColumnBox>
          </TowColumnBox>
          <BottomDrawer
            drawOpen={drawOpen}
            toggleDrawer={toggleDrawer}
            backgroundColor={'rgb(33 3 3)'}
          >
            <DrawBody></DrawBody>
          </BottomDrawer>
        </ScrollContainer>
      </StyledContainer>
    </PageContainer>
  )
}

export default React.memo(ProgramPage);