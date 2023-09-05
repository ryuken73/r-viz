import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { usePalette } from 'color-thief-react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import BottomDrawer from 'Components/BottomDrawer';
import DrawBody from 'Components/BottomDrawer/DrawBody';
import background1 from 'resources/Cul2.jpg';
import {throttle} from 'utils';

const RELATIVE_HEIGHT = '80px';
const SHOW_HEADER_SCROLL_Y = 200;

const PageContainer = styled.div`
`
const StyledContainer = styled(Container)` `
// const TopHeader = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   height: ${RELATIVE_HEIGHT};
//   width: 100%;
//   background-color: ${props => props.show && 'black'};
//   z-index: 1;
//   background-image: ${props => props.backgroundImage ? 
//     `url(${props.backgroundImage}), linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0.5))`:
//     `url(${background1}), linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0.5))`};
//   background-repeat: no-repeat, no-repeat;
//   background-position: top center, right;
//   background-attachment: fixed;
//   background-size: contain;
// `
const TopHeader = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 25vw;
  z-index: 1;
`
const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`
const TopHero = styled.div`
  /* height: ${RELATIVE_HEIGHT}; */
  height: ${SHOW_HEADER_SCROLL_Y}px;
  padding-top: calc(25vw + 10px);
`
const CommonDiv = styled.div`
  text-align: center;
  font-size: 1rem;
  border-radius: 5px;
`
const BigNumber = styled(CommonDiv)`
  background: transparent;
  font-size: ${props => props.size ? `${props.size}rem` : '2rem'};
  backdrop-filter: blur(5px);
  color: white;
`
const ScrollContainer = styled.div`
  /* transform: translateY(${RELATIVE_HEIGHT}); */
  transform: translateY(calc(25vw + 5px));
`
const SingleColumnBox = styled.div`
  /* color: ${props => props.color2 ? props.color2 : "lightgrey"}; */
  /* background: ${props => props.color4 ? props.color4 : "lightgrey"}; */
`;
const TowColumnBox = styled.div` `
const Header = styled(CommonDiv)`
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  margin-bottom: 0.05rem;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  background: yellow;
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
    background-color: teal;
  }
`

function ProgramPage(props) {
  const {programImage} = props;
  const backgroundImage = programImage || background1; 
  const [ showTopHeader, setShowTopHeader ] = React.useState(false);
  const [ drawOpen, setDrawerOpen ] = React.useState(false);
  const [ colors, setColors ] = React.useState([])
  const containerRef = React.useRef(null);
  const { data, loading, error} = usePalette(backgroundImage, 5, 'rgbString');
  const [color1, color2, color3, color4, color5] = colors;

  React.useEffect(() => {
    if(loading === false && error === undefined){
      // document.body.style.cssText = `background: ${data[0]} !important`;  
      containerRef.current.style.cssText = `background: ${data[0]} !important`;  
      setColors(data)
    }
  }, [data, error, loading])

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

  const FixedDiv = styled.div`
    position: fixed;
    color: black;
    width: 100px;
    height: 100px;
    top: 0;
    left: 0;
    z-index: 2;
  `

  return (
    <PageContainer ref={containerRef}>
      <CssBaseline />
        <TopHeader 
          show={showTopHeader}
          backgroundImage={backgroundImage}   
          backgroundColor={color1}
        >
          <StyledImage src={backgroundImage}></StyledImage>
          {/* <TopHeaderContent color="white">☰</TopHeaderContent> */}
        </TopHeader> 
      <StyledContainer onScroll={handleScroll} maxWidth="lg">
        <TopHero>
          <BigNumber size={5}>13.5%</BigNumber>
        </TopHero>
        <button onClick={toggleDrawer}>show detail</button>
        <ScrollContainer>
          <SingleColumnBox color2={color2} color4={color4}>
            <Header>흐린상태XX</Header>
            <Contents>날씨</Contents>
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
            backgroundColor={color3}
          >
            <DrawBody></DrawBody>
          </BottomDrawer>
        </ScrollContainer>
      </StyledContainer>

    </PageContainer>
  )
}

export default React.memo(ProgramPage);