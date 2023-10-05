import React from 'react';
import ReactDOM from 'react';
import Canvas from '@antv/f2-react';
import { Chart, Line, Axis, Tooltip, Point } from '@antv/f2';

const initialData = [
  {
    date: new Date ().getTime(),
    value: 116,
  },
];

function ChartReact(props) {
  // const [data, setData] = React.useState(initialData);
  const {chartData: data, period} = props;
  console.log('chartData:', data)
  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setData(data => {
  //       const newData = {
  //         date: new Date ().getTime(),
  //         value: Math.round(Math.random() * 100)
  //       }
  //       return [
  //         ...data,
  //         newData
  //       ].slice(data.length - 10)
  //     }) 
  //   }, 2000)
  //   return () => {
  //     clearInterval(timer)
  //   }
  // }, [])
  const timeMaskMap = {
    daily: 'mm:ss',
    weekly: 'MM.DD',
    monthy: 'MM.DD',
    halfYearly: 'MM',
    yearly: 'MM',
  }
  const tickCountMap = {
    daily: 5,
    weekly: 8,
    monthy: 15,
    halfYearly: 6,
    yearly: 12,
  }
  return (
    <Canvas className="noSwiping" pixelRatio={window.devicePixelRatio}>
        <Chart data={data} scale={{value: {min: 0}}}>
          <Axis
            field="timestamp"
            type="timeCat"
            mask={timeMaskMap[period]}
            tickCount={tickCountMap[period]}
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
          <Line 
            x="timestamp" 
            y="value" 
            style={{
              stroke: 'yellow',
              lineWidth: 5,
              lineCap: 'round' 
            }}
            shape="smooth"
          />
          <Point 
            x="timestamp" 
            y="value" 
            size={5}
            style={{
              field: 'medalType',
              fill: '#fff',
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
  )

}

export default ChartReact;