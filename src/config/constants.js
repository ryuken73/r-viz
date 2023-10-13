const dev = {
  CONFIG_LOCAL_STORAGE_KEY: 'r-viz-sbs',
  LOGLESS_REDUX_ACTIONS: [''],
  DEFAULT_FETCH_OPTIONS: {
    headers: {
      'Content-type': 'application/json'
    }
  },
  DATA_TYPE : {
    CONCURRENT_LISTENER: 'concurrentListener',
    ACTIVE_LISTENER: 'activeListener',
    LISTENER_ORG: 'listenerOrg',
    KEEP_RATIO: 'keepRatio',
    PARTICIPATION: "participation",
    PRODUCTION: 'production',
    LISTEN_ANALYSIS: 'listenAnalysis',
  }  
}

const prd = {
  ...dev
}

export default process.env.NODE_ENV === 'development' ? dev : prd;