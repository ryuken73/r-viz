import React from 'react';
import styled from 'styled-components';
import Canvas from 'lib/ReactF2';
import { Chart, Interval, Legend } from '@antv/f2';
import useChartResize from 'hooks/useChartResize';

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const data = [
    {
      name: '长津湖',
      percent: 10,
      a: '1',
    },
    {
      name: '我和我的父辈',
      percent: 20,
      a: '1',
    },
    // {
    //   name: '失控玩家',
    //   percent: 30,
    //   a: '1',
    // },
    // {
    //   name: '宝可梦',
    //   percent: 40,
    //   a: '1',
    // },
    // {
    //   name: '峰爆',
    //   percent: 50,
    //   a: '1',
    // },
    // {
    //   name: '其他',
    //   percent: 60,
    //   a: '1',
    // },
  ];

function PieChartSvg() {
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
            type: 'polar',
            transposed: true,
            innerRadius: 0.7,
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
    </Container>
  )

}

export default React.memo(PieChartSvg);