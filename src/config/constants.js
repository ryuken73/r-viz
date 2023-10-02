const dev = {

}

const prd = {
  ...dev
}

export default process.env.NODE_ENV === 'development' ? dev : prd;