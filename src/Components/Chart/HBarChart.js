import React from 'react';
import styled from 'styled-components';
import Canvas from '@antv/f2-react';
import { Chart, Line, Tooltip, Interval, ScrollBar, Point, Axis, Area } from '@antv/f2';

const CustomCanvas = styled(Canvas)`
`
const CANVAS_WIDTH = window.innerWidth * 0.7;

function HBarChart(props) {
  const {data={}} = props;
  console.log('####', data)
  return (
    <CustomCanvas 
      pixelRatio={window.devicePixelRatio}
      height={CANVAS_WIDTH}
    >
      <Chart
        data={data.targetData.chartData}
        coord={{
          transposed: true
        }}
        scale={{
          timestamp: {
            type: 'timeCat',
            tickCount: 5,
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
        <Interval 
          x="timestamp" 
          y="value" 
          color={{
            field: 'timestamp',
            callback: (year) => {
              if(year === '1962 年'){
                return 'red';
              } else {
                return 'blue';
              }
            }
          }}
        />
      </Chart>
    </CustomCanvas>
  )
}

export default React.memo(HBarChart);