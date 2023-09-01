import React from 'react';
import {VictoryChart, VictoryAxis, VictoryBar, VictoryLabel} from 'victory';
import data from 'sample/multiChart_test.json';

const top5 = data.slice(0,10).map(record => {
  return {
    ...record,
    result: {
      ...record.result,
      lsnr_cnt: parseInt(record.result.lsnr_cnt),
      music_time: parseInt(record.result.music_time),
      text_cnt: record.result.text_cnt === undefined ? 0 : parseInt(record.result.text_cnt)
    }
  }
});
const toTimeString = date => {
  return (new Date(date)).toLocaleTimeString();
}

function Simple() {
  return (
    <VictoryChart 
      domain={{x: [0.5, 10.5], y: [7000, 8000]}}
      domainPadding={20}
    >
      <VictoryBar
        data={top5}
        x="result._time"
        y="result.lsnr_cnt"
      ></VictoryBar>
      <VictoryAxis
        style={{
          tickLabels: {
            fontSize: 15,
          }  
        }}
        tickLabelComponent={<VictoryLabel style={{fontSize: 10}} angle={45} dx={20} />}
        // tickValues={timeStrings}
        tickFormat={(x) => toTimeString(x)}
      ></VictoryAxis>
      <VictoryAxis
        dependentAxis
        tickFormat={(y) => (`${y / 1000}k`)}
      ></VictoryAxis>
    </VictoryChart>
  )
}

export default React.memo(Simple);
