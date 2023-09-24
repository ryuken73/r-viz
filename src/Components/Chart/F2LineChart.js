import React from 'react';
import styled from 'styled-components';
import F2, { jsx, Canvas, Chart, Line, Axis, Tooltip } from '@antv/f2';

const Container = styled.div`
  border-radius: 10px;
`
const StyledCanvas = styled.canvas`
  width: 100%;
  height: 100%;
`

const initialData = [
  {
    date: new Date ().getTime(),
    value: 116,
  },
];


function LineChart() {
  const containerRef = React.useRef(null);
  const chartRef = React.useRef(null);
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
    }, 5000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  React.useLayoutEffect(() => {
    if(containerRef.current === null) return;
    const context = containerRef.current.getContext('2d');
    const {props} = (
      <Canvas context={context} pixelRatio={window.devicePixelRatio}>
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
    );
    const canvas = new Canvas(props);
    // Chart.line({
    //   scaleGridLineColor: '#1b1129',
    //   scaleLineColor: '#1b1129' 

    // })
    canvas.render();
  }, [data])

  return (
    <Container className="App">
      <StyledCanvas ref={containerRef} id="container" className="noSwiping"></StyledCanvas>
    </Container>
  );
}

export default React.memo(LineChart);