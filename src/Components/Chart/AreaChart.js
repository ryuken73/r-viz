import React from 'react';
import styled from 'styled-components';
import Canvas from '@antv/f2-react';
import { Chart, Line, Tooltip, ScrollBar, Point, Axis, Area } from '@antv/f2';

const MinusPadding = styled.div`
  padding: -20px;
`
const CustomCanvas = styled(Canvas)`
`

const data = [
  {
    time: '2016-08-08 00:00:00',
    tem: 10,
  },
  {
    time: '2016-08-08 00:10:00',
    tem: 22,
  },
  {
    time: '2016-08-08 00:30:00',
    tem: 16,
  },
  {
    time: '2016-08-09 00:35:00',
    tem: 26,
  },
  {
    time: '2016-08-09 01:00:00',
    tem: 12,
  },
  {
    time: '2016-08-09 01:20:00',
    tem: 26,
  },
  {
    time: '2016-08-10 01:40:00',
    tem: 18,
  },
  {
    time: '2016-08-10 02:00:00',
    tem: 26,
  },
  {
    time: '2016-08-10 02:20:00',
    tem: 12,
  },
];
console.log(window.innerWidth)
const CANVAS_WIDTH = window.innerWidth * 0.7;

function LineCartSvg(props) {
  const {data} = props;
  return (
    <CustomCanvas 
      pixelRatio={window.devicePixelRatio}
      height={CANVAS_WIDTH}
    >
      <Chart
        data={data}
        scale={{
          time: {
            type: 'timeCat',
            tickCount: 3,
          },
          tem: {
            min: 0,
          },
        }}
      >
        <Axis
          field="time"
          style={{
            label: { align: 'between' },
            grid: { stroke: 'transparent'}
          }}
        />
        <Axis 
          field="tem" 
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
        <Area x="time" y="tem" color="l(90) 0:#f7ff18 1:#f7f7f7" shape="smooth" />
        <Line x="time" y="tem" size="5" color="l(90) 0:#f7ff18 1:#f7f7f7" shape="smooth" />
      </Chart>
    </CustomCanvas>
  )

}

export default React.memo(LineCartSvg);