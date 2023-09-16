import React from 'react';
import styled from 'styled-components';
import {
  Header,
  Contents
} from 'Components/Common/StyleDefs';
import TopTitle from 'Components/ProgramPage/TopTitle';
import TopHero from 'Components/ProgramPage/TopHero';
import ParallaxImage from 'Components/Common/ParallaxImage';

const SingleColumnBox = styled.div`
`;
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
    background-color: transparent;
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
  }
`

function ProgramPage(props) {
  const {
    programTitle="아름다운 이 아침 김창완입니다.",
    programImage
  } = props;
  return (
    <div>
      <ParallaxImage
        image={programImage}
      >
      <TopTitle title={programTitle}>
      </TopTitle>
      <TopHero totalRecv={12345} />
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
  
      </ParallaxImage>
    </div>
  )
}

export default React.memo(ProgramPage);