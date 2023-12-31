import React from 'react';
import styled from 'styled-components';
import Canvas from 'lib/ReactF2';
import { Chart, Line, Axis, Interval, Point, Legend } from '@antv/f2';
import useChartResize from 'hooks/useChartResize';

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const data = [
  {
    gender: 'Male',
    value: -4.4,
    cate: '0-10',
  },
  {
    gender: 'Male',
    value: -4.8,
    cate: '10-19',
  },
  {
    gender: 'Male',
    value: -5.8,
    cate: '20-29',
  },
  {
    gender: 'Male',
    value: -6.2,
    cate: '30-39',
  },
  {
    gender: 'Male',
    value: -7.5,
    cate: '40-49',
  },
  {
    gender: 'Male',
    value: -8.0,
    cate: '50-59',
  },
  {
    gender: 'Male',
    value: -5.5,
    cate: '60-69',
  },
  {
    gender: 'Male',
    value: -4.8,
    cate: '70-79',
  },
  {
    gender: 'Male',
    value: -1.8,
    cate: '80-89',
  },
  {
    gender: 'Male',
    value: -0.3,
    cate: '90-99',
  },
  {
    gender: 'Male',
    value: -0.1,
    cate: '100 +',
  },
  {
    gender: 'Female',
    value: 4.1,
    cate: '0-10',
  },
  {
    gender: 'Female',
    value: 4.6,
    cate: '10-19',
  },
  {
    gender: 'Female',
    value: 5.6,
    cate: '20-29',
  },
  {
    gender: 'Female',
    value: 6.0,
    cate: '30-39',
  },
  {
    gender: 'Female',
    value: 7.2,
    cate: '40-49',
  },
  {
    gender: 'Female',
    value: 7.9,
    cate: '50-59',
  },
  {
    gender: 'Female',
    value: 6.0,
    cate: '60-69',
  },
  {
    gender: 'Female',
    value: 5.8,
    cate: '70-79',
  },
  {
    gender: 'Female',
    value: 3.0,
    cate: '80-89',
  },
  {
    gender: 'Female',
    value: 0.7,
    cate: '90-99',
  },
  {
    gender: 'Female',
    value: 0.1,
    cate: '100 +',
  },
];

function DualBarChartSvg() {
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
          data={data}
          coord={{
            transposed: true,
          }}
          scale={{
            sales: {
              tickCount: 5,
            },
          }}
        >
          <Interval x="cate" y="value" adjust="stack" color="gender" />
          <Legend align="right" field="gender" />
        </Chart>
      </Canvas>
    </Container>
  )

}

export default React.memo(DualBarChartSvg);