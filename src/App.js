import React from 'react';
import styled from 'styled-components';
import { usePalette } from 'color-thief-react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// import background1 from 'resources/Cul2.jpg';
// import background1 from 'resources/parkso.jpg';
import background1 from 'resources/ji.jpg';
import Portal from 'Components/Portal';
import Simple from 'Components/Victory';
import Sample from 'Components/Victory/Sample';
import {throttle} from 'utils';
import './App.css';

const GraphContainer = styled.div`
  width: 40vw;
  height: 40vh;
`
const CommonDiv = styled.div`
  text-align: center;
  /* background: black; */
  /* color: white; */
  font-size: 1rem;
  border-radius: 5px;
`
const RELATIVE_HEIGHT = '80px';
const SHOW_HEADER_SCROLL_Y = 200;
const HIDE_HEIGHT = '80px';

const StyledContainer = styled(Container)`
`

const TopHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: ${RELATIVE_HEIGHT};
  width: 100%;
  background-color: ${props => props.show && 'black'};
  z-index: 1;
  background-image: url(${background1}), linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0.5));
  background-repeat: no-repeat, no-repeat;
  background-position: top center, right;
  background-attachment: fixed;
  background-size: contain;
`
const ScrollContainer = styled.div`
  transform: translateY(${RELATIVE_HEIGHT});
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
const BigNumber = styled(CommonDiv)`
  background: transparent;
  font-size: ${props => props.size ? `${props.size}rem` : '2rem'};
  backdrop-filter: blur(5px);
  color: white;
`
const TopHero = styled.div`
  height: ${RELATIVE_HEIGHT};
  height: ${SHOW_HEADER_SCROLL_Y}px;
  padding-top: calc(80px + 10px);
`
const Hero = styled.div`
  width: 200px;
  height: 100px;
  background: #ccc;
  margin: 0 auto;
`


function App() {
  const [ showTopHeader, setShowTopHeader ] = React.useState(false);
  const [ colors, setColors ] = React.useState([])
  const { data, loading, error} = usePalette(background1, 5, 'rgbString');
  const [color1, color2, color3, color4, color5] = colors;

  React.useEffect(() => {
    if(loading === false && error === undefined){
      document.body.style.cssText = `background: ${data[0]} !important`;  
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


  return (
    <div>
      <CssBaseline />
      <StyledContainer onScroll={handleScroll} maxWidth="lg">
        <TopHeader show={showTopHeader}>
          {/* <TopHeaderContent color="white">☰</TopHeaderContent> */}
        </TopHeader> 
        <TopHero>
          <BigNumber size={5}>13.5%</BigNumber>
        </TopHero>
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
        </ScrollContainer>
      </StyledContainer>
    </div>
  );
}

export default React.memo(App);
