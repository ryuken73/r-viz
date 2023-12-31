import {sampleListPrograms} from 'sample/sampleData';
import Series from 'time-series-data-generator';

export const queryAll = async ({queryKey}) => {
  const [_key, url, options ] = queryKey;
  console.log('fetch called:', _key, queryKey)
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const body = await response.json();
  console.log(body)
  if (body.success){
    return body.data;
  } else {
    throw new Error('api failed')
  }
};

export const querySample = async ({queryKey}) => {
  const [_key ] = queryKey;
  const {apiName, url, params} = _key;
  console.log('fetch called:', apiName, url,  queryKey)
  const response = await fetchSample(apiName, url, params);
  console.log('## mock data:', params?.type, response);
  const body = response;
  if (body.success){
    return body.data;
  } else {
    throw new Error('api failed')
  }
}

const fetchSample = (apiName, url, params) => {
  return new Promise((resolve, reject) => {
    if(apiName === 'queryListPrograms'){
      resolve({success: true, data: sampleListPrograms})
      return;
    }
    if(apiName === 'queryOnairProgramIds'){
      resolve({success: true, data: ['1', '4']})
      return;
    }
    if(apiName === 'queryDetailData'){
      const {programId, type, period, isOnair} = params;
      if(isOnair){
        const liveData = getLiveData(type, period)
        resolve({success: true, data: liveData})
      } else {
        const pastData = getPastData(type, period)
        resolve({success: true, data: pastData})
      }
      return;
    }
    if(apiName === 'queryBatchData'){
      const {programId, unit, unitTargets, type} = params;
      const results = unitTargets.map(unitTarget => {
        return {
          target: unitTarget,
          targetData: getPastData(type, unit)
        }
      })
      resolve({success: true, data: results});
    }
    resolve({success: false})
  })
}

const randumNumber = (min=0, max=100) => {
  return min + Math.round(Math.random() * (max-min));
}

const plusTimeMap = {
  daily: 1000 * 60 * 60,
  weekly: 1000 * 60 * 60 * 24 * 7,
  monthly: 1000 * 60 * 60 * 24 * 30,
  halfYearly: 1000 * 60 * 60 * 24 * 30 * 6,
  yearly: 1000 * 60 * 60 * 24 * 30 * 12,
}
const intervalMap = {
  daily: 300,
  weekly: 60*60*24,
  monthly: 60*60*24,
  halfYearly: 60*60*24*30,
  yearly: 60*60*24*30
}

const getLiveData = (type, period) => {
  if(type === 'concurrentListener'){
    const from = (new Date(Date.now())).toISOString();
    const until = (new Date(Date.now() + plusTimeMap['daily'] * 2)).toISOString();
    const interval = 60;
    const keyName = 'value';
    const series = new Series({from, until, interval, keyName})
    const chartDataPast = series.generate(() => {
      return randumNumber(40, 85)
    }).map(data => {
      return {...data, type: 'past'};
    })  
    return {
      totalRecv: [Math.floor(Math.random() * 10000), Math.floor(Math.random()*10000)],
      headText: `${randumNumber()}%`,
      footText: `${randumNumber()}% 변동`,
      chartData: chartDataPast,
    }
  }
}

const getPastData = (type, period) => {
  if( type === 'concurrentListener'){
    const from = (new Date(Date.now())).toISOString();
    const until = (new Date(Date.now() + plusTimeMap['daily'] * 2)).toISOString();
    const interval = 60;
    const keyName = 'value';
    const series = new Series({from, until, interval, keyName})
    const chartDataPast = series.generate(() => {
    return randumNumber(40, 85)
    }).map(data => {
      return {...data, type: 'past'};
    })  
    const chartDataCurrent = series.generate(() => {
      return randumNumber(50, 99)
    }).map(data => {
      return {...data, type: 'current'};
    })

    return {
      totalRecv: [Math.floor(Math.random() * 10000), Math.floor(Math.random()*10000)],
      headText: `${randumNumber()}%`,
      footText: `${randumNumber()}% 변동`,
      chartData: [
        ...chartDataPast,
        ...chartDataCurrent
      ]
    }
  }
  if( type === 'activeListener' || type === 'keepRatio' || type === 'production'){
    const from = (new Date(Date.now())).toISOString();
    const until = (new Date(Date.now() + plusTimeMap[period])).toISOString();
    const interval = intervalMap[period];
    const keyName = 'value';
    const series = new Series({from, until, interval, keyName})
    const chartData = series.generate(() => {
      return randumNumber()
    });

    return {
      totalRecv: Math.floor(Math.random() * 10000),
      headText: `${randumNumber()}%`,
      footText: `${randumNumber()}% 변동`,
      chartData
    }
  }
  const orgList = ['10대', '20대', '30대', '40대', '50대', '60대', '70대', '이상']
  if(type === 'listenerOrg'){
    const result = {};
    result.chartData = orgList.map(org => {
      return {
        item: org,
        score: randumNumber()
      }
    })
    result.footText = '20대 선호';
    return result;
  }
}