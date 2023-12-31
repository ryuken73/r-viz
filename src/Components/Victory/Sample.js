import React from 'react';
import {VictoryChart, VictoryAxis, VictoryBrushContainer, VictoryLine, VictoryZoomContainer} from 'victory';
const INITIAL_DATA = { 
  x: [new Date(1990, 1, 1), new Date(2009, 1, 1)] 
}

function Sample() {
  const [zoomDomain, setZoomDomain] = React.useState(INITIAL_DATA)
  const handleZoom = (zoomDomain) => {
    setZoomDomain(zoomDomain);
  }
  return (
    <div>
      <VictoryChart width={600} height={470} scale={{ x: "time" }}
        containerComponent={
          <VictoryZoomContainer
            zoomDimension="x"
            zoomDomain={zoomDomain}
            onZoomDomainChange={handleZoom}
          />
        }
      >
          <VictoryLine
            style={{
              data: { stroke: "tomato" }
            }}
            data={[
              { a: new Date(1982, 1, 1), b: 125 },
              { a: new Date(1987, 1, 1), b: 257 },
              { a: new Date(1993, 1, 1), b: 345 },
              { a: new Date(1997, 1, 1), b: 515 },
              { a: new Date(2001, 1, 1), b: 132 },
              { a: new Date(2005, 1, 1), b: 305 },
              { a: new Date(2011, 1, 1), b: 270 },
              { a: new Date(2015, 1, 1), b: 470 }
            ]}
            x="a"
            y="b"
          />

        </VictoryChart>
        <VictoryChart
          padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
          width={600} height={100} scale={{ x: "time" }}
          containerComponent={
            <VictoryBrushContainer
              brushDimension="x"
              brushDomain={zoomDomain}
              onBrushDomainChange={handleZoom}
            />
          }
        >
          <VictoryAxis
            tickFormat={(x) => new Date(x).getFullYear()}
          />
          <VictoryLine
            style={{
              data: { stroke: "tomato" }
            }}
            data={[
              { key: new Date(1982, 1, 1), b: 125 },
              { key: new Date(1987, 1, 1), b: 257 },
              { key: new Date(1993, 1, 1), b: 345 },
              { key: new Date(1997, 1, 1), b: 515 },
              { key: new Date(2001, 1, 1), b: 132 },
              { key: new Date(2005, 1, 1), b: 305 },
              { key: new Date(2011, 1, 1), b: 270 },
              { key: new Date(2015, 1, 1), b: 470 }
            ]}
            x="key"
            y="b"
          />
        </VictoryChart>
    </div>
  )
}

export default React.memo(Sample);