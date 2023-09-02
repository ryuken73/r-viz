import React from 'react';
import styled from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Portal from 'Components/Portal';
import Simple from 'Components/Victory';
import Sample from 'Components/Victory/Sample';
import './App.css';

const GraphContainer = styled.div`
  width: 40vw;
  height: 40vh;
`
const CommonDiv = styled.div`
  text-align: center;
  background: teal;
  color: white;
  font-size: 1rem;
  border-radius: 5px;
`
const RELATIVE_HEIGHT = '80px';
const HIDE_HEIGHT = '80px';

const TopHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: ${RELATIVE_HEIGHT};
  width: 100%;
  background-color: yellow;
  z-index: 1;
`

const ScrollContainer = styled.div`
  transform: translateY(${RELATIVE_HEIGHT});
`
const SingleColumnBox = styled.div`
  /* margin-top: 1rem; */
`
const TowColumnBox = styled.div`

`
const Header = styled(CommonDiv)`
  color: lightgrey;
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
const BigNumber = styled(CommonDiv)`
  font-size: 2rem;
`
const TopHero = styled.div`
  height: ${RELATIVE_HEIGHT};
  height: 250px;
  padding-top: calc(80px + 10px);
`
const Hero = styled.div`
  width: 200px;
  height: 100px;
  background: #ccc;
  margin: 0 auto;
`

function App() {
  React.useEffect(() => {
    document.addEventListener('sticky-change', (event) => {
      console.log(event.detail.target, event.detail.sticking)
    })
  }, [])
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <TopHeader>
          {/* <TopHeaderContent color="white">☰</TopHeaderContent> */}
        </TopHeader> 
        <TopHero>
          <Hero>hero message</Hero>
        </TopHero>
        <ScrollContainer>
          <SingleColumnBox>
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
          <SingleColumnBox height="long">
            <Header>흐린상태3</Header>
            <Contents>Swans are birds of the family Anatidae within the genus Cygnus. The swans' close relatives include the geese and ducks. Swans are grouped with the closely related geese in the subfamily Anserinae where they form the tribe Cygnini. Sometimes, they are considered a distinct subfamily, Cygninae. There are six or seven living (and one extinct) species of swan in the genus Cygnus; in addition, there is another species known as the coscoroba swan, although this species is no longer considered one of the true swans. Swans usually mate for life, although “divorce” sometimes occurs, particularly following nesting failure, and if a mate dies, the remaining swan will take up with another. The number of eggs in each clutch ranges from three to eight.</Contents>
          </SingleColumnBox>
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
      </Container>
    </>
  );
}

export default React.memo(App);
