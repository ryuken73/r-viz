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
  TextNormal,
  LastGraphBox,
  LastCard
} from 'Components/Common/StyleDefs';
import TopTitle from 'Components/ProgramPage/TopTitle';
import CardContent from 'Components/ProgramPage/CardContent';
import AnimatedNumber from 'Components/Common/AnimatedNumber';
import AnimatedNumberWithDot from 'Components/Common/AnimatedNumberWithDot';
import TopHero from 'Components/ProgramPage/TopHero';
import ParallaxImage from 'Components/Common/ParallaxImage';
import SlidingRadio from 'Components/SlidingRadio';
import LiveLineChart from 'Components/Chart/LiveLineChart';
import LineChartSvg from 'Components/Chart/LineChartSvg';
import RadarChartSvg from 'Components/Chart/RadarChartSvg';
import BarChartSvg from 'Components/Chart/BarChartSvg';
import PieChartSvg from 'Components/Chart/PieChartSvg';
import HbarChartSvg from 'Components/Chart/HbarChartSvg';
import ScatterChartSvg from 'Components/Chart/ScatterChartSvg';
import DualBarChartSvg from 'Components/Chart/DualBarChartSvg';
import BottomDrawer from 'Components/BottomDrawer';
import GraphComponent from 'Components/Chart/GraphComponent';

const Container = styled.div`
  transform: ${props => props.openDrawer && 'scale(0.97)'};
  transition: all 0.5s;
  user-select: none;
`
const GraphContainer = styled.div`
  display: grid;
  gap: 1rem;
  // Small devices (landscape phones, 576px and up)
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const SliderContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`
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
  const [ currentPercentage, setCurrentPercentage ] = React.useState(0);
  const [ openDrawer, setOpenDrawer ] = React.useState(false);
  const [ drawContentId, setDrawContentId] = React.useState(null);
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
   }, 10000) 
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
    // const heightWithScroll = document.documentElement.scrollHeight;
    // const currentPx = (percentage - 1) * heightWithScroll;
    const hideSummaryStartPercent = 1.04
    // console.log(percentage)
    setCurrentPercentage(percentage);
    if(percentage < hideSummaryStartPercent){
      setShowSummary(false);
    }
    if(percentage > hideSummaryStartPercent){
      setShowSummary(true);
    }
  }, [])

  const onClickGraph = React.useCallback((id) => {
    setDrawContentId(id);
    setOpenDrawer(true);
  }, [])

  return (
    <Container openDrawer={openDrawer}>
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
        <SliderContainer>
          <SlidingRadio></SlidingRadio>
        </SliderContainer>
      <ParallaxImage
        image={programImage}
        overflowColor={'black'}
        handleScroll={handleScroll}
      >
        <TopTitle 
          totalRecv={totalRecv}
          currentPercentage={currentPercentage}
          setShowSummary={setShowSummary}
        >
        </TopTitle>
        <SliderContainer>
          <SlidingRadio></SlidingRadio>
        </SliderContainer>
        <SingleColumnBox height="long">
          <Header>현재 동시 청취자수 </Header>
          <Contents
          >
            <LiveLineChart></LiveLineChart>
          </Contents>
        </SingleColumnBox>
        <SliderContainer>
          <SlidingRadio></SlidingRadio>
        </SliderContainer>
        <GraphContainer>
          {/* <Columns> */}
            <GraphComponent
              id="activeListener"
              title="활성 청취자"
              headText="200명"
              footText="어제보다 2% 증가"
              onClickGraph={onClickGraph}
            >
              <LineChartSvg
                id="activeListener"
              ></LineChartSvg>
            </GraphComponent>
            <GraphComponent
              id="listenerOrg"
              title="청취자 구성"
              footText="1위 남자회사원" 
              onClickGraph={onClickGraph}
            >
              <RadarChartSvg></RadarChartSvg>
            </GraphComponent>
          {/* </Columns> */}
          {/* <Columns> */}
            <GraphComponent
              id="keepRatio"
              title="유지율"
              headText="72%"
              footText="지난주 대비 1% 증가" 
              onClickGraph={onClickGraph}
            >
              <BarChartSvg></BarChartSvg>
            </GraphComponent>
            <GraphComponent
              id="participation"
              title="청취자참여"
              headText="1,230건 "
              footText="지난주 대비 3% 증가" 
              onClickGraph={onClickGraph}
            >
              <PieChartSvg></PieChartSvg>
            </GraphComponent>
          {/* </Columns> */}
          {/* <Columns> */}
            <GraphComponent
              id="production"
              title="제작요소"
              footText="지난주 대비 3,000 증가" 
              onClickGraph={onClickGraph}
            >
              <HbarChartSvg></HbarChartSvg>
            </GraphComponent>
            <GraphComponent
              id="listenRatio"
              title="청취율분석"
              footText="지난주 대비 1% 증가" 
              onClickGraph={onClickGraph}
            >
                  <ScatterChartSvg></ScatterChartSvg>
            </GraphComponent>
          {/* </Columns> */}
          {/* <Columns> */}
            <GraphComponent
              id="analysisNote"
              title="분석노트"
              onClickGraph={() => {}}
            >
            </GraphComponent>
            <GraphComponent
              id="etc"
              title="ETC"
              footText="지난주 대비 1% 증가" 
              onClickGraph={onClickGraph}
            >
              <DualBarChartSvg></DualBarChartSvg>
            </GraphComponent>
          {/* </Columns> */}
          {/* <Columns> */}
            <LastGraphBox>
              <LastCard></LastCard>
            </LastGraphBox>
          {/* </Columns> */}
        </GraphContainer>
      </ParallaxImage>
      <BottomDrawer 
        drawContentId={drawContentId}
        openDrawer={openDrawer} 
        setOpenDrawer={setOpenDrawer}
      ></BottomDrawer>
    </Container>
  )
}

export default React.memo(ProgramPage);