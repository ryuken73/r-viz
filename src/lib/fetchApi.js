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
  const [_key, url, options ] = queryKey;
  console.log('fetch called:', _key, queryKey)
  const response = await fetchSample(url, options);
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
}

const fetchSample = (url, options) => {
  return {};
}
