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
  Header,
  Contents,
  TextNormal,
  LastGraphBox,
  LastCard
} from 'Components/Common/StyleDefs';
import TopTitle from 'Components/ProgramPage/TopTitle';
import AnimatedNumberWithDot from 'Components/Common/AnimatedNumberWithDot';
import ImageBackground from 'Components/Common/ImageBackground';
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
import useAppState from 'hooks/useAppState';
import {useDetailDataQuery} from 'hooks/useDataQuery';

const TopSticky = styled.div`
  position: fixed;
  top: -3rem;
  width: 100%;
  color: white;
  z-index: 100;
  text-align: center;
  background: black;
  height: 3rem;
`

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
  max-width: 800px;
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
    programId=0,
    programTitle="두시탈출 컬투쇼",
    programImage,
    isOnair
  } = props;
  const { showSummary, globalPeriod } = useAppState();
  const [ imageColors, setImageColors ] = React.useState(['black'])
  const [ currentPercentage, setCurrentPercentage ] = React.useState(0);
  const [ openDrawer, setOpenDrawer ] = React.useState(false);
  const [ drawerContent, setDrawerContent] = React.useState(null);
  // const [ totalRecv, setTotalRecv ] = React.useState(100);
  const { data: activeListenerData = {}, isLoading } = useDetailDataQuery({
    autoRunning: true,
    programId,
    isOnair: false,
    period: globalPeriod,
    type: 'activeListener'
  })
  const { data: listenerOrgData = {}} = useDetailDataQuery({
    autoRunning: true,
    programId,
    isOnair: false,
    period: globalPeriod,
    type: 'listenerOrg'
  })
  const { data: keepRatioData = {}} = useDetailDataQuery({
    autoRunning: true,
    programId,
    isOnair: false,
    period: globalPeriod,
    type: 'keepRatio'
  })
  const { totalRecv = 0, chartData=[] } = activeListenerData;
  const { data, loading, error} = usePalette(programImage, 5, 'rgbString');

  // React.useEffect(() => {
  //  const timer = setInterval(() => {
  //     const rands = Math.floor(Math.random() * 10000);
  //     setTotalRecv(totalRecv => {
  //       return (Date.now() % 2 === 0) ? 
  //         Math.abs(totalRecv + rands) :
  //         Math.abs(totalRecv - rands)
  //     })
  //  }, 10000) 
  //  return () => {
  //   clearInterval(timer);
  //  }
  // }, [])

  React.useEffect(() => {
    if(loading === false && error === undefined){
      setImageColors(data)
    }
  }, [data, error, loading])

  const filterdColor = tinycolor(imageColors[0]).greyscale(10).darken(65).toString();

  const onClickGraph = React.useCallback((programId, chartType) => {
    setDrawerContent({programId, chartType});
    setOpenDrawer(true);
  }, [])

  const summaryText = isOnair ? '[ONAIR] 현재 동시 청취자수' : '평균 동시 청취자수'
  const liveGraphTitle = isOnair ? '현재 동시 청취자수' : '동시 청취자수'

  return (
    <div>
      <TitleContainer openDrawer={openDrawer}>
        <TopSticky show={openDrawer}>ABC</TopSticky>
        <CustomImg src={programImage} showSummary={showSummary} />
        <SummaryTextContainer hide={true}>
          <DummyText showSummary={showSummary}>Dummy</DummyText>
        </SummaryTextContainer>
        <Title size={1.5} hide={!showSummary}>
          {programTitle}
        </Title>
        <SummaryTextContainer hide={!showSummary}>
          <TextNormal>{summaryText}</TextNormal>
          <Sep>
            :
          </Sep>
          <TextNormal>
            <AnimatedNumberWithDot to={totalRecv} postfix="명" postfixSize={1} />
          </TextNormal>
        </SummaryTextContainer>
      </TitleContainer>
      <Container openDrawer={openDrawer}>
        <ImageBackground
          image={programImage}
        >
          <TopTitle 
            summaryText={summaryText}
            totalRecv={totalRecv}
            currentPercentage={currentPercentage}
          >
          </TopTitle>
          <SingleColumnBox height="long">
            <Header noBackground={true}>{liveGraphTitle}</Header>
            <Contents
            >
              <LiveLineChart 
                chartData={chartData}
                period={globalPeriod}
              ></LiveLineChart>
            </Contents>
          </SingleColumnBox>
          <SliderContainer>
            <SlidingRadio></SlidingRadio>
          </SliderContainer>
          <GraphContainer>
            <GraphComponent
              programId={programId}
              type="activeListener"
              title="활성 청취자"
              headText={activeListenerData.totalRecv||"none"}
              footText={activeListenerData.footText||"none"}
              onClickGraph={onClickGraph}
            >
              <LineChartSvg
                id="activeListener"
                chartData={activeListenerData.chartData}
              ></LineChartSvg>
            </GraphComponent>
            <GraphComponent
              programId={programId}
              type="listenerOrg"
              title="청취자 구성"
              footText={listenerOrgData.footText||'none'}
              onClickGraph={onClickGraph}
            >
              <RadarChartSvg
                id="listenerOrg"
                chartData={listenerOrgData.chartData}
              ></RadarChartSvg>
            </GraphComponent>
            <GraphComponent
              programId={programId}
              type="keepRatio"
              title="유지율"
              headText={keepRatioData.headText||'none'}
              footText={keepRatioData.footText||'none'}
              onClickGraph={onClickGraph}
            >
              <BarChartSvg
                id="keepRatio"
                chartData={keepRatioData.chartData}
              ></BarChartSvg>
            </GraphComponent>
            <GraphComponent
              programId={programId}
              type="participation"
              title="청취자참여"
              headText="1,230건 "
              footText="지난주 대비 3% 증가" 
              onClickGraph={onClickGraph}
            >
              <PieChartSvg></PieChartSvg>
            </GraphComponent>
            <GraphComponent
              programId={programId}
              type="production"
              title="제작요소"
              footText="지난주 대비 3,000 증가" 
              onClickGraph={onClickGraph}
            >
              <HbarChartSvg></HbarChartSvg>
            </GraphComponent>
            <GraphComponent
              programId={programId}
              type="listenRatio"
              title="청취율분석"
              footText="지난주 대비 1% 증가" 
              onClickGraph={onClickGraph}
            >
              <ScatterChartSvg></ScatterChartSvg>
            </GraphComponent>
            <GraphComponent
              programId={programId}
              type="analysisNote"
              title="분석노트"
              onClickGraph={() => {}}
            >
            </GraphComponent>
            <GraphComponent
              programId={programId}
              type="etc"
              title="ETC"
              footText="지난주 대비 1% 증가" 
              onClickGraph={onClickGraph}
            >
              <DualBarChartSvg></DualBarChartSvg>
            </GraphComponent>
            <LastGraphBox>
              <LastCard></LastCard>
            </LastGraphBox>
          </GraphContainer>
        </ImageBackground>
        <BottomDrawer 
          drawerContent={drawerContent}
          openDrawer={openDrawer} 
          setOpenDrawer={setOpenDrawer}
        ></BottomDrawer>
      </Container>
    </div>
  )
}

export default React.memo(ProgramPage);