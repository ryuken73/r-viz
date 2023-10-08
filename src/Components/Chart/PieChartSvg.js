import React from 'react';
import styled from 'styled-components';
import Canvas from '@antv/f2-react';
import { Chart, Interval, Legend } from '@antv/f2';

const data = [
    {
      name: '长津湖',
      percent: 10,
      a: '2',
    },
    {
      name: '我和我的父辈',
      percent: 20,
      a: '1',
    },
    {
      name: '失控玩家',
      percent: 30,
      a: '3',
    },
    {
      name: '宝可梦',
      percent: 40,
      a: '4',
    },
    {
      name: '峰爆',
      percent: 50,
      a: '5',
    },
    {
      name: '其他',
      percent: 60,
      a: '6',
    },
  ];

function PieChartSvg() {
  return (
    <Canvas pixelRatio={window.devicePixelRatio}>
      <Chart
        data={data}
        coord={{
          type: 'polar',
          transposed: true,
          innerRadius: 0.1,
        }}
      >
        <Interval
          x="a"
          y="percent"
          adjust="stack"
          // adjust="symmetric"
          color={{
            field: 'name',
            range: ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0'],
          }}
          style={{
            radius: [10, 7, 4, 2],
          }}
        />
      </Chart>
    </Canvas>
  )

}

export default React.memo(PieChartSvg);