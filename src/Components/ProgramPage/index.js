import React from 'react';
import styled from 'styled-components';
import { usePalette } from 'color-thief-react';
import tinycolor from 'tinycolor2';
import {
  TitleContainer,
  SummaryTextContainer,
  DummyText,
  Title,
  Sep,
  SingleColumnBox,
  Columns,
  GraphBox,
  Card,
  Header,
  Contents,
  TextNormal
} from 'Components/Common/StyleDefs';
import TopTitle from 'Components/ProgramPage/TopTitle';
import CardContent from 'Components/ProgramPage/CardContent';
import AnimatedNumber from 'Components/Common/AnimatedNumber';
import AnimatedNumberWithDot from 'Components/Common/AnimatedNumberWithDot';
import TopHero from 'Components/ProgramPage/TopHero';
import ParallaxImage from 'Components/Common/ParallaxImage';
import LiveLineChart from 'Components/Chart/LiveLineChart';

const CustomImg = styled.img`
  position: absolute;
  object-fit: cover;
  object-position: center top;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: ${props => props.showSummary ? 0.3 : 1};
  transition: 1s all;
  -webkit-mask-image: radial-gradient(red, transparent);
  mask-image: radial-gradient(red, transparent);
  -webkit-mask-size: 100% 180%;
  mask-size: 100% 180%;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-repeat:no-repeat;
  mask-repeat:no-repeat;
  -webkit-mask-composite: source-in;
  mask-composite: source-in;
  /* -webkit-mask-image: linear-gradient(to left, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%); */
`

const getPxFromPercent = (totalHeight, percent) => {
  return totalHeight * percent / 100;
}

function ProgramPage(props) {
  const {
    programTitle="두시탈출 컬투쇼",
    programImage
  } = props;
  const [ imageColors, setImageColors ] = React.useState(['black'])
  const [ currentPx, setCurrentPx ] = React.useState(0);
  const [ showSummary, setShowSummary ] = React.useState(false);
  const [ totalRecv, setTotalRecv ] = React.useState(100);
  const { data, loading, error} = usePalette(programImage, 5, 'rgbString');
  React.useEffect(() => {
   const timer = setInterval(() => {
      const rands = Math.floor(Math.random() * 10000);
      setTotalRecv(totalRecv => {
        return (Date.now() % 2 === 0) ? 
          totalRecv + rands :
          totalRecv - rands
      })
   }, 2000) 
   return () => {
    clearInterval(timer);
   }
  }, [])
  React.useEffect(() => {
    if(loading === false && error === undefined){
      setImageColors(data)
    }
  }, [data, error, loading])
  const filterdColor = tinycolor(imageColors[0]).greyscale(10).darken(65).toString();
  const handleScroll = React.useCallback((percentage) => {
    const startPercent = 20;
    const endPercent = 10;
    const heightWithScroll = document.documentElement.scrollHeight;
    const animationStartHeightPx = getPxFromPercent(window.innerHeight, startPercent);
    const animationEndHeightPx = getPxFromPercent(window.innerHeight, endPercent);
    const currentPx = (percentage - 1) * heightWithScroll;
    setCurrentPx(currentPx)
    // console.log(currentPx, animationStartHeightPx, animationEndHeightPx )
    // console.log(percentage, window.innerHeight, document.documentElement.scrollHeight)
  }, [])

  return (
    <div>
      <TitleContainer>
        <CustomImg src={programImage} showSummary={showSummary} />
        <SummaryTextContainer hide={true}>
          <DummyText showSummary={showSummary}>Dummy</DummyText>
        </SummaryTextContainer>
        <Title size={1.5} hide={!showSummary}>
          {programTitle}
        </Title>
        <SummaryTextContainer hide={!showSummary}>
          <TextNormal>
            현재 동시 청취자수 
          </TextNormal>
          <Sep>
            :
          </Sep>
          <TextNormal>
            <AnimatedNumberWithDot to={totalRecv} postfix="명" postfixSize={1} />
          </TextNormal>
        </SummaryTextContainer>
      </TitleContainer>
      <ParallaxImage
        image={programImage}
        overflowColor={filterdColor}
        handleScroll={handleScroll}
      >
        <TopTitle 
          totalRecv={totalRecv}
          currentPx={currentPx} 
          setShowSummary={setShowSummary}
        >
        </TopTitle>
        <SingleColumnBox height="long">
          <Header>현재 동시 청취자수 </Header>
          <Contents>
            <LiveLineChart></LiveLineChart>
          </Contents>
        </SingleColumnBox>
        <p></p>
        <Columns>
          <GraphBox>
            <Header>활성 청취자 </Header>
            <Card>
              <CardContent
                headText="200명"
                footText="어제보다 2% 증가"
              >
              </CardContent>
            </Card>
          </GraphBox>
          <GraphBox>
            <Header>청취자 구성</Header>
            <Card></Card>
          </GraphBox>
        </Columns>
        <Columns>
          <GraphBox>
            <Header>유지율</Header>
            <Card></Card>
          </GraphBox>
          <GraphBox>
            <Header>청취자참여</Header>
            <Card></Card>
          </GraphBox>
        </Columns>
        <Columns>
          <GraphBox>
            <Header>제작요소</Header>
            <Card></Card>
          </GraphBox>
          <GraphBox>
            <Header>청취율분석</Header>
            <Card></Card>
          </GraphBox>
        </Columns>
        <Columns>
          <GraphBox>
            <Header>분석노트</Header>
            <Card></Card>
          </GraphBox>
          <GraphBox>
            <Header>ETC</Header>
            <Card></Card>
          </GraphBox>
        </Columns>
      </ParallaxImage>
    </div>
  )
}

export default React.memo(ProgramPage);