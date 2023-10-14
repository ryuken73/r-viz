import React from 'react';
import styled from 'styled-components';
import Canvas from 'lib/ReactF2';
import { Chart, Line, Axis, Point, Legend } from '@antv/f2';
import useChartResize from 'hooks/useChartResize';

const Container = styled.div`
  width: 100%;
  height: 100%;
`

function RadarChartSvg(props) {
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
          coord="polar"
          scale={{
            score: {
              min: 0,
              max: 120,
              nice: false,
              tickCount: 4,
            },
          }}
        >
          <Axis 
            field="item" 
            grid="line"
            style={{
              label: { align: 'between', fontSize: 2 },

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
      </Canvas>
    </Container>
  )
}

export default React.memo(RadarChartSvg);