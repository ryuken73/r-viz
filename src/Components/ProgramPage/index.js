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
import ConcurrentUserChart from 'Components/Chart/ConcurrentUserChart';
import BottomDrawer from 'Components/BottomDrawer';
import GraphComponent from 'Components/Chart/GraphComponent';
import useAppState from 'hooks/useAppState';
import {useDetailDataQuery} from 'hooks/useDataQuery';
import constants from 'config/constants';

const {DATA_TYPE} = constants;
const {
  CONCURRENT_LISTENER,
  ACTIVE_LISTENER,
  LISTENER_ORG,
  KEEP_RATIO,
  PARTICIPATION,
  PRODUCTION,
  LISTEN_ANALYSIS
} = DATA_TYPE;

const TopSticky = styled.div`
  position: fixed;
  top: -3rem;
  width: 100%;
  color: white;
  z-index: 15;
  text-align: center;
  background: black;
  height: 3rem;
`

const Container = styled.div`
  transform: ${props => props.openDrawer && 'scale(0.97)'};
  /* transform: scale(0.9); */
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
  position: sticky;
  position: -webkit-sticky;
  top: calc(15vh);
  margin-top: 2rem;
  margin-bottom: 2rem;
  z-index: 30;
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
const INITIAL_RECORD_COUNT = 121;

const genNextData = (chartData) => {
  const nextIndex = chartData.length - INITIAL_RECORD_COUNT;
  if(chartData.length === INITIAL_RECORD_COUNT * 2){
    return chartData;
  }
  const nextRecord = {
    ...chartData[nextIndex],
    value: Math.round(Math.random() * 100),
    type: 'current'
  }
  return [
    ...chartData,
    nextRecord
  ]
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
  const [ savedData, setSavedData ] = React.useState(null);
  // const [ totalRecv, setTotalRecv ] = React.useState(100);
  const { data: concurrentListener = {}} = useDetailDataQuery({
    autoRunning: true,
    programId,
    isOnair,
    type: CONCURRENT_LISTENER,
  })
  const { totalRecv = [0, 0], chartData=[] } = concurrentListener;
  const { data, loading, error} = usePalette(programImage, 5, 'rgbString');

  React.useEffect(() => {
    if(!isOnair) return;
    if(concurrentListener.chartData === undefined) return;
    setSavedData(savedData => {
      if(savedData === null){
        return concurrentListener.chartData;
      } else {
        const nextData = genNextData(savedData);
        return nextData;
      }
    })
  }, [concurrentListener.chartData, isOnair])

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

  const summaryText = isOnair ? '[ONAIR] 현재 동시 청취자수' : '평균 동시 청취자수Z'
  const liveGraphTitle = isOnair ? '현재 동시 청취자수' : '동시 청취자수'

  return (
    <div>
      <Container openDrawer={openDrawer}>
        <TitleContainer openDrawer={openDrawer}>
          {/* <TopSticky show={openDrawer}>ABC</TopSticky> */}
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
              <AnimatedNumberWithDot to={totalRecv[1]} postfix="명" postfixSize={1} />
            </TextNormal>
          </SummaryTextContainer>
        </TitleContainer>
        <ImageBackground
          image={programImage}
        >
          <TopTitle 
            isOnair={isOnair}
            hide={openDrawer}
            summaryText={summaryText}
            totalRecv={totalRecv[1]}
            currentPercentage={currentPercentage}
          >
          </TopTitle>
          <SingleColumnBox hide={openDrawer} height="long">
            <Header noBackground={true}>{liveGraphTitle}</Header>
            <Contents
            >
              <ConcurrentUserChart 
                isOnair={isOnair}
                chartData={isOnair ? savedData : chartData}
              ></ConcurrentUserChart>
            </Contents>
          </SingleColumnBox>
            <SliderContainer>
              <SlidingRadio></SlidingRadio>
            </SliderContainer>
            <GraphContainer>
              <GraphComponent
                programId={programId}
                type={ACTIVE_LISTENER}
                title="활성 청취자"
                onClickGraph={onClickGraph}
              />
              <GraphComponent
                programId={programId}
                type={LISTENER_ORG}
                title="청취자 구성"
                onClickGraph={onClickGraph}
              />
              <GraphComponent
                programId={programId}
                type={KEEP_RATIO}
                title="유지율"
                onClickGraph={onClickGraph}
              />
              <GraphComponent
                programId={programId}
                type={PARTICIPATION}
                title="청취자참여"
                headText="1,230건 "
                footText="지난주 대비 3% 증가" 
                onClickGraph={onClickGraph}
              />
              <GraphComponent
                programId={programId}
                type={PRODUCTION}
                title="제작요소"
                footText="지난주 대비 3,000 증가" 
                onClickGraph={onClickGraph}
              />
              <GraphComponent
                programId={programId}
                type={LISTEN_ANALYSIS}
                title="청취율분석"
                footText="지난주 대비 1% 증가" 
                onClickGraph={onClickGraph}
              />
              <GraphComponent
                programId={programId}
                type="analysisNote"
                title="분석노트"
                onClickGraph={() => {}}
              />
              <GraphComponent
                programId={programId}
                type="etc"
                title="ETC"
                footText="지난주 대비 1% 증가" 
                onClickGraph={onClickGraph}
              />
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