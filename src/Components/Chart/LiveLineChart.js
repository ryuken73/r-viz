import React from 'react';
import ReactDOM from 'react';
import Canvas from '@antv/f2-react';
import { Chart, Line, Axis, Tooltip } from '@antv/f2';

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
        ]
      }) 
    }, 2000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <Canvas className="noSwiping" pixelRatio={window.devicePixelRatio}>
        <Chart data={data}>
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
          <Tooltip showCrosshairs={true} />
          <Line 
            x="date" 
            y="value" 
            style={{
              stroke: 'yellow',
              lineWidth: 5 
            }}
          />
          <Tooltip />
        </Chart>
    </Canvas>
  )

}

export default ChartReact;