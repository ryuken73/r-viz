import React from 'react';
import styled from 'styled-components';
import Canvas from 'lib/ReactF2';
import { Chart, Line, ScrollBar, Point, Axis, Area } from '@antv/f2';
import useChartResize from 'hooks/useChartResize';

const Container = styled.div`
  width: 100%;
  height: 100%;
`

function LineChartSvg(props) {
  const {chartData} = props;
  const parentRef = React.useRef(null);
  const ref = React.useRef(null);

  useChartResize({
    parentRef, 
    canvasRef: ref,
    heightRatio: 0.8  
  })

  return (
    <Container ref={parentRef}>
      <Canvas ref={ref} pixelRatio={window.devicePixelRatio}>
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
    </Container>
  )
}

export default React.memo(LineChartSvg);