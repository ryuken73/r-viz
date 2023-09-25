import React from 'react';
import styled from 'styled-components';
import Canvas from '@antv/f2-react';
import { Chart, Interval } from '@antv/f2';

const data = [
  {
    year: '1951 年',
    sales: 38,
  },
  {
    year: '1952 年',
    sales: 52,
  },
  {
    year: '1956 年',
    sales: 61,
  },
  {
    year: '1957 年',
    sales: 145,
  },
  {
    year: '1958 年',
    sales: 48,
  },
  {
    year: '1959 年',
    sales: 38,
  },
  {
    year: '1960 年',
    sales: 38,
  },
  {
    year: '1962 年',
    sales: 38,
  },
];

function HbarChartSvg() {
  return (
    <Canvas pixelRatio={window.devicePixelRatio}>
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
      {/* <Axis field="year" /> */}
      {/* <Axis field="sales" /> */}
      <Interval x="year" y="sales" />
    </Chart>
    </Canvas>
  )

}

export default React.memo(HbarChartSvg);