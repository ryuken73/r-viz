import {queryAll, querySample} from 'lib/fetchApi';
import {useQuery} from 'react-query';
import constants from 'config/constants';

const {DEFAULT_FETCH_OPTIONS} = constants;
const getFetchOptions = {
  method: 'GET',
  ...DEFAULT_FETCH_OPTIONS
}
const defaultGetOptions = {
  fetchOptions: getFetchOptions
}

const apiMap = {
  "queryDetailData": ({period, type}) => {
    return {
      url: `/${period}/${type}`,
      ...defaultGetOptions
    }
  }
}

export const useDetailDataQuery = ({
  autoRunning=false,
  period,
  type,
}) => {
  const enabled = autoRunning;
  const apiName = 'queryDetailData';
  const {url, fetchOptions} = apiMap[apiName]({
    period,
    type
  });
  const queryKey = {
    apiName,
    url,
    fetchOptions
  }
  const results = useQuery({
    queryKey, 
    queryFn: querySample, 
    enabled,
    keepPreviousData: true
  });
  return results;  
}