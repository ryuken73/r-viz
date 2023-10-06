import React from 'react';
import styled from 'styled-components';
import Canvas from '@antv/f2-react';
import { Chart, Line, ScrollBar, Point, Axis, Area } from '@antv/f2';

function LineCartSvg(props) {
  const {chartData} = props;
  return (
    // <MinusPadding>
    <Canvas pixelRatio={window.devicePixelRatio}>
      <Chart 
        data={chartData} 
        height={135}
        scale={{value: {min: 0, max: 100}}
      }>
        <Line 
          x="timestamp" 
          y="value" 
          style={{
            stroke: 'yellow',
            lineWidth: 2,
            lineCap: 'round' 
          }}
          shape="smooth"
        />
        <Point 
          x="timestamp" 
          y="value"
          color='white'
          size={{
            field: 'timestamp',
            callback: (time) => {
              if(time === 'Jun.'){
                return 5;
              } else {
                return 0;
              }
            }
          }}
        ></Point>
      </Chart>
    </Canvas>
    // </MinusPadding>
  )
}

export default React.memo(LineCartSvg);