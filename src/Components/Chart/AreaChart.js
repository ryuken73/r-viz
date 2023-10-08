import React from 'react';
import styled from 'styled-components';
import Canvas from '@antv/f2-react';
import { Chart, Line, Tooltip, ScrollBar, Point, Axis, Area } from '@antv/f2';

const CustomCanvas = styled(Canvas)`
`
const CANVAS_WIDTH = window.innerWidth * 0.7;

function AreaChart(props) {
  const {data={}} = props;
  console.log('####', data)
  return (
    <CustomCanvas 
      pixelRatio={window.devicePixelRatio}
      height={CANVAS_WIDTH}
    >
      <Chart
        data={data.targetData.chartData}
        scale={{
          timestamp: {
            type: 'timeCat',
            tickCount: 3,
          },
          value: {
            min: 0,
          },
        }}
      >
        <Axis
          field="timestamp"
          style={{
            label: { align: 'between' },
            grid: { stroke: 'transparent'}
          }}
        />
        <Axis 
          field="value" 
        />
        <Tooltip 
          crosshairsType='xy'
          crosshairsStyle={{
            stroke: 'yellow',
            lineWidth: 1,
            lineCap: 'round' 
          }}
          showCrosshairs={true} 
        />
        <Area x="timestamp" y="value" color="l(90) 0:#f7ff18 1:#f7f7f7" shape="smooth" />
        <Line x="timestamp" y="value" size="5" color="l(90) 0:#f7ff18 1:#f7f7f7" shape="smooth" />
      </Chart>
    </CustomCanvas>
  )
}

export default React.memo(AreaChart);