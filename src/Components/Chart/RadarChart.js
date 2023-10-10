import React from 'react';
import styled from 'styled-components';
import Canvas from '@antv/f2-react';
import { Chart, Line, Tooltip, ScrollBar, Point, Axis, Area } from '@antv/f2';

const CustomCanvas = styled(Canvas)`
`
const CANVAS_WIDTH = window.innerWidth * 0.7;

function RadarChart(props) {
  const {data={}} = props;

  return (
    <CustomCanvas 
      pixelRatio={window.devicePixelRatio}
      height={CANVAS_WIDTH}
    >
      <Chart
        data={data.targetData.chartData}
        coord="polar"    
        scale={{
          timestamp: {
            type: 'timeCat',
            tickCount: 3,
          },
          score: {
            min: 0,
            max: 120,
            nice: false,
            tickCount: 4
          },
        }}
      >
        <Axis
          field="item"
          grid="line"
          style={{
            label: { align: 'between' },
          }}
        />
        <Axis 
          field="score" 
          grid="line"
          style={{
            grid: { fill: '#1890FF', fillOpacity: 0.2 },
          }}          
        />
        <Line x="item" y="score" color="user" />
        <Point x="item" y="score" color="user" />
      </Chart>
    </CustomCanvas>
  )
}

export default React.memo(RadarChart);