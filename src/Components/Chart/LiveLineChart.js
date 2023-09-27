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

function ChartReact() {
  const [data, setData] = React.useState(initialData);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setData(data => {
        const newData = {
          date: new Date ().getTime(),
          value: Math.round(Math.random() * 100)
        }
        return [
          ...data,
          newData
        ].slice(data.length - 10)
      }) 
    }, 2000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <Canvas className="noSwiping" pixelRatio={window.devicePixelRatio}>
        <Chart data={data} scale={{value: {min: 0}}}>
          <Axis
            field="date"
            type="timeCat"
            mask="mm:ss"
            tickCount={5}
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
            x="date" 
            y="value" 
            style={{
              stroke: 'yellow',
              lineWidth: 5,
              lineCap: 'round' 
            }}
            shape="smooth"
          />
          <Point 
            x="date" 
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