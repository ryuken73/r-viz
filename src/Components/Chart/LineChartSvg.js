import React from 'react';
import styled from 'styled-components';
import Canvas from '@antv/f2-react';
import { Chart, Line, Axis, Area } from '@antv/f2';

const MinusPadding = styled.div`
  padding: -20px;
`

const data = [
  {
    time: 'Jan.',
    tem: 1000,
  },
  {
    time: 'Feb.',
    tem: 2200,
  },
  {
    time: 'Mar.',
    tem: 2000,
  },
  {
    time: 'Apr.',
    tem: 2600,
  },
  {
    time: 'May.',
    tem: 2000,
  },
  {
    time: 'Jun.',
    tem: 2600,
  },
  {
    time: 'Jul.',
    tem: 2800,
  },
  {
    time: 'Aug.',
    tem: 2000,
  },
];


function LineCartSvg() {
  return (
    // <MinusPadding>
    <Canvas pixelRatio={window.devicePixelRatio}>
        <Chart 
          data={data} 
          scale={{value: {min: 0}}
        }>
          <Line 
            x="time" 
            y="tem" 
            style={{
              stroke: 'yellow',
              lineWidth: 2,
              lineCap: 'round' 
            }}
            shape="smooth"
          />
        </Chart>
    </Canvas>
    // </MinusPadding>
  )

}

export default React.memo(LineCartSvg);