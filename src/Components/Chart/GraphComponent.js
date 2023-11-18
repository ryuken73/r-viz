import React from 'react';
import CardContent from 'Components/ProgramPage/CardContent';
import {
  GraphBox,
  Header,
  Card,
} from 'Components/Common/StyleDefs';
import LineChartSvg from 'Components/Chart/LineChartSvg';
import RadarChartSvg from 'Components/Chart/RadarChartSvg';
import BarChartSvg from 'Components/Chart/BarChartSvg';
import PieChartSvg from 'Components/Chart/PieChartSvg';
import HbarChartSvg from 'Components/Chart/HbarChartSvg';
import ScatterChartSvg from 'Components/Chart/ScatterChartSvg';
import DualBarChartSvg from 'Components/Chart/DualBarChartSvg';
import constants from 'config/constants';
import useAppState from 'hooks/useAppState';
import { useDetailDataQuery } from 'hooks/useDataQuery';

const {DATA_TYPE} = constants;
const {
  CONCURRENT_LISTENER,
  ACTIVE_LISTENER,
  LISTENER_ORG,
  KEEP_RATIO,
  PARTICIPATION,
  PRODUCTION,
  LISTEN_ANALYSIS,
  ANALYSIS_NOTE,
  ETC
} = DATA_TYPE;

const ChartMap = {
  [ACTIVE_LISTENER]: LineChartSvg,
  [LISTENER_ORG]: RadarChartSvg,
  [KEEP_RATIO]: BarChartSvg,
  [PARTICIPATION]: PieChartSvg,
  [PRODUCTION]: HbarChartSvg,
  [LISTEN_ANALYSIS]: ScatterChartSvg,
  [ANALYSIS_NOTE]: LineChartSvg,
  [ETC]: DualBarChartSvg
}

const ChartSvg = props => {
  const TargetChart = ChartMap[props.type];
  console.log('####', props.type, TargetChart)
  return <TargetChart {...props}></TargetChart>
}

const withData = (WrappedComponent) => {
  return (props) => {
    const {globalPeriod} = useAppState();
    const {data={}, isLoading} = useDetailDataQuery({
      autoRunning: true,
      programId: props.programId,
      isOnair: false,
      period: globalPeriod,
      type: props.type
    })
    return (
      <WrappedComponent 
        isLoading={isLoading}
        headText={data.headText} 
        footText={data.footText} 
        chartData={data?.chartData}
        {...props}
      >
      </WrappedComponent>
    )
  }
}

function GraphComponent(props) {
  console.log('### props:', props)
  const {
    programId, 
    type: chartType, 
    title, 
    isLoading,
    headText, 
    footText, 
    chartData, 
    onClickGraph, 
  } = props;

  const handleClick = React.useCallback(() => {
    onClickGraph(programId, chartType);
  }, [chartType, onClickGraph, programId])

  return (
    <GraphBox onClick={handleClick}>
    <div>
      {/* <Header>{title}</Header> */}
      <Card>
        {isLoading ? (
          <div>Loading...</div>
        ):(
          <CardContent
            headText={headText}
            footText={footText}
          >
            <ChartSvg 
              type={chartType} 
              chartData={chartData}
            />
          </CardContent>
        )}
      </Card>
    </div>
    </GraphBox>
  )
}

export default React.memo(withData(GraphComponent));
