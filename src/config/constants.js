const dev = {
  CONFIG_LOCAL_STORAGE_KEY: 'r-viz-sbs',
  LOGLESS_REDUX_ACTIONS: ['']
}

const prd = {
  ...dev
}

export default process.env.NODE_ENV === 'development' ? dev : prd;