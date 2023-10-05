import {sampleListPrograms} from 'sample/sampleData';

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
  console.log('fetch called:', _key, url,  queryKey)
  const {apiName} = _key;
  const response = await fetchSample(apiName);
  const body = response;
  if (body.success){
    return body.data;
  } else {
    throw new Error('api failed')
  }
}

const fetchSample = (apiName) => {
  return new Promise((resolve, reject) => {
    if(apiName === 'queryListPrograms'){
      resolve({success: true, data: sampleListPrograms})
      return;
    }
    resolve({success: false})
  })
}
