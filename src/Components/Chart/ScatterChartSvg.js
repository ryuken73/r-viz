import React from 'react';
import styled from 'styled-components';
import Canvas from 'lib/ReactF2';
import { Chart, Line, Axis, Point, Legend } from '@antv/f2';
import scatterData from 'sample/scatterData_test.json'
import useChartResize from 'hooks/useChartResize';

const Container = styled.div`
  width: 100%;
  height: 100%;
`

function ScatterChartSvg() {
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
          data={scatterData}
          coord={{}}
          scale={{
            height: {
              tickCount: 5,
            },
            weight: {
              tickCount: 5,
            },
          }}
        >
          <Point x="height" y="weight" color="gender" style={{ fillOpacity: 0.65 }} />
        </Chart>
      </Canvas>
    </Container>
  )

}

export default React.memo(ScatterChartSvg);