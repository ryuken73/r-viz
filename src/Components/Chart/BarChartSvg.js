import React from 'react';
import Canvas from '@antv/f2-react';
import { Chart, Line, Axis, Interval } from '@antv/f2';

function BarChartSvg(props) {
  const {chartData} = props;
  return (
  <Canvas pixelRatio={window.devicePixelRatio}>
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
  )
}

export default React.memo(BarChartSvg);