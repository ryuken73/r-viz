import React from 'react';
import styled from 'styled-components';
import Canvas from '@antv/f2-react';
import { Chart, Line, Axis, Point, Legend } from '@antv/f2';
import scatterData from 'sample/scatterData_test.json'

function ScatterChartSvg() {
  return (
    <Canvas pixelRatio={window.devicePixelRatio}>
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
  )

}

export default React.memo(ScatterChartSvg);