import React from 'react';
import styled from 'styled-components';
import Canvas from 'lib/ReactF2';
import { Chart, Line, Axis, Interval } from '@antv/f2';
import useChartResize from 'hooks/useChartResize';

const Container = styled.div`
  width: 100%;
  height: 100%;
`

function BarChartSvg(props) {
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
          scale={{
            sales: {
              tickCount: 5,
            },
          }}
        >
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
      </Canvas>
    </Container>
  )
}

export default React.memo(BarChartSvg);