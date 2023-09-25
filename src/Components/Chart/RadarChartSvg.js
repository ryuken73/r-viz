import React from 'react';
import styled from 'styled-components';
import Canvas from '@antv/f2-react';
import { Chart, Line, Axis, Point, Legend } from '@antv/f2';

const data = [
  {
    item: 'Design',
    score: 70,
  },
  {
    item: 'Development',
    score: 60,
  },
  {
    item: 'Marketing',
    score: 50,
  },
  {
    item: 'Users',
    score: 40,
  },
  {
    item: 'Test',
    score: 60,
  },
  {
    item: 'Language',
    score: 70,
  },
  {
    item: 'Technology',
    score: 70,
  },
  {
    item: 'Support',
    score: 60,
  },
];

function RadarChartSvg() {
  return (
    <Canvas pixelRatio={window.devicePixelRatio}>
      <Chart
        data={data}
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
  )

}

export default React.memo(RadarChartSvg);