import React from 'react';
import styled from 'styled-components';
// import Canvas from '@antv/f2-react';
import Canvas from 'lib/ReactF2';
import { Chart, Line, ScrollBar, Point, Axis, Area } from '@antv/f2';

const Container = styled.div`
  width: 100%;
`

function LineCartSvg(props) {
  const {chartData} = props;
  const parentRef = React.useRef(null);
  const ref = React.useRef(null);

  console.log('###', props)
  
  React.useEffect(() => {
    if(parentRef.current === null) return;
    if(ref.current === null) return;
    ref.current.resize(parentRef.current.clientWidth, parentRef.current.clientWidth*0.5);
  }, [])  

  React.useEffect(() => {
    if(ref.current === null) return;
    window.addEventListener('resize', () => {
      console.log(parentRef.current.clientWidth)
      ref.current.resize(parentRef.current.clientWidth, parentRef.current.clientWidth*0.5);
    })
  }, [])

  return (
    <Container ref={parentRef}>
      <Canvas ref={ref} pixelRatio={window.devicePixelRatio}>
        <Chart 
          data={chartData} 
          height={135}
          scale={{value: {min: 0, max: 100}}
        }>
          <Line 
            x="timestamp" 
            y="value" 
            style={{
              stroke: 'yellow',
              lineWidth: 2,
              lineCap: 'round' 
            }}
            shape="smooth"
          />
          <Point 
            x="timestamp" 
            y="value"
            color='white'
            size={{
              field: 'timestamp',
              callback: (time) => {
                if(time === 'Jun.'){
                  return 5;
                } else {
                  return 0;
                }
              }
            }}
          ></Point>
        </Chart>
      </Canvas>
    </Container>
  )
}

export default React.memo(LineCartSvg);