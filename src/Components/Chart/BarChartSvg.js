import React from 'react';
import Canvas from '@antv/f2-react';
import { Chart, Line, Axis, Interval } from '@antv/f2';

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

function BarChartSvg() {
  return (
  <Canvas pixelRatio={window.devicePixelRatio}>
    <Chart
      data={data}
      scale={{
        sales: {
          tickCount: 5,
        },
      }}
    >
      <Interval 
        x="year" 
        y="sales" 
        color={{
          field: 'year',
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
  )
}

export default React.memo(BarChartSvg);