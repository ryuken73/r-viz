import React from 'react';
import styled from 'styled-components';
import Canvas from 'lib/ReactF2';
import { Chart, Line, Area, Axis, Tooltip, Point } from '@antv/f2';

const initialData = [
  {
    date: new Date ().getTime(),
    value: 116,
  },
];

const Container = styled.div`
  width: 100%;
`

function ConcurrentUserChart(props) {
  const {chartData: data, isOnair} = props;
  const parentRef = React.useRef(null);
  const ref = React.useRef(null);

  const lineColor = isOnair ? 'yellow':'teal';
  const pointColor = isOnair ? 'yellow':'teal';
  const areaColor = isOnair ? 'yellow':'teal';

  React.useEffect(() => {
    if(parentRef.current === null) return;
    if(ref.current === null) return;
    ref.current.resize(parentRef.current.clientWidth, parentRef.current.clientWidth*0.5);
  }, [])

  console.log('+++chartData:', data)
  React.useEffect(() => {
    if(ref.current === null) return;
    window.addEventListener('resize', () => {
      ref.current.resize(parentRef.current.clientWidth, parentRef.current.clientWidth*0.5);
    }, {passive: false})
  }, [])

  const timeMaskMap = {
    daily: 'h시m분',
    weekly: 'M월D일',
    monthy: 'M월D일',
    halfYearly: 'M월',
    yearly: 'M월',
  }
  const tickCountMap = {
    daily: 4,
    weekly: 4,
    monthy: 6,
    halfYearly: 6,
    yearly: 6,
  }
  return (
    <Container ref={parentRef}>
      <Canvas ref={ref} className="noSwiping" pixelRatio={window.devicePixelRatio}>
        <Chart data={data} scale={{value: {min: 0, max: 100}}}>
          <Axis
            field="timestamp"
            type="timeCat"
            mask={timeMaskMap['daily']}
            tickCount={tickCountMap['daily']}
            style={{
              label: { align: 'between' },
              grid: { stroke: 'transparent'}
            }}
          />
          <Axis 
            field="value" 
            tickCount={5} 
            style={{
              grid: {
                stroke: 'transparent'
              }
            }}
          />
          <Tooltip 
            crosshairsType='xy'
            crosshairsStyle={{
              stroke: 'yellow',
              lineWidth: 1,
              lineCap: 'round' 
            }}
            showCrosshairs={true} 
          />
          <Area 
            x="timestamp" 
            y="value" 
            color={{
              field: 'type',
              callback: (type) => {
                if(type === 'current'){
                  return 'transparent';
                }
                if(type === 'past'){
                  return areaColor; 
                }
              }
            }}
            shape="smooth"
          />
          <Line 
            x="timestamp" 
            y="value" 
            style={{
              // stroke: 'yellow',
              field: 'type',
              lineWidth: (type) => {
                if(type === 'current'){
                  return 2
                }
                if(type === 'past'){
                  return 1
                }
              },
              lineCap: 'round',
              smooth: true
            }}
            // shape="smooth"
            shape={{
              field: 'type',
              callback: (type) => {
                if (type === 'current') {
                  return 'line';
                }
                if (type === 'past') {
                  return 'dash';
                }
              },
            }}
            color={{
              field: 'type',
              range: ['grey', lineColor]
            }}
          />
          <Point 
            x="timestamp" 
            y="value" 
            size={{
              field: 'type',
              callback: (type) => {
                if(type === 'current'){
                  return 2;
                } else {
                  return 1;
                }
              }
            }}
            style={{
              field: 'type',
              fill: (type) => {
                  if(type === 'current'){
                    return pointColor;
                  } else {
                    return 'transparent';
                  }
                }
              ,
              lineWidth: 1,
              stroke: (val) => {
                if (val === 'Gold Medals') {
                  return '#f3ac32';
                } else if (val === 'Silver Medals') {
                  return '#b8b8b8';
                } else if (val === 'Bronze Medals') {
                  return '#bb6e36';
                }
              },
            }}
          />
          <Tooltip />
        </Chart>
      </Canvas>
    </Container>
  )
}

export default React.memo(ConcurrentUserChart);