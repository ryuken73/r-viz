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
  "queryListPrograms": () => {
    return {
      url: `/listPrograms`,
      ...defaultGetOptions
    }
  },
  "queryDetailData": ({period, type}) => {
    return {
      url: `/${period}/${type}`,
      ...defaultGetOptions
    }
  },
  "queryOnairProgramIds": () => {
    return {
      url: `/onairProgramIds`,
      ...defaultGetOptions
    }
  }
}

const useQueryFunction = (enabled, apiName, params) => {
  const {url, fetchOptions} = apiMap[apiName](params);
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

export const useDetailDataQuery = ({
  autoRunning=false,
  period,
  type,
}) => {
  const apiName = 'queryDetailData';
  const results = useQueryFunction(autoRunning, apiName, {period, type})
  return results;  
}

export const useListProgramsQuery = ({
  autoRunning=false
}) => {
  const apiName = 'queryListPrograms';
  const results = useQueryFunction(autoRunning, apiName, {})
  return results;  
}

export const useOnairProgramIdsQuery = ({
  autoRunning=true
}) => {
  const apiName = 'queryOnairProgramIds';
  const results = useQueryFunction(autoRunning, apiName, {})
  return results;  
}