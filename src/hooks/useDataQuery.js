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
  "queryDetailData": ({programId, isOnair, period, type}) => {
    return {
      url: `/${programId}/${type}?period=${period}&isOnair=${isOnair}`,
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

const useQueryFunction = (enabled, apiName, autoRefetch, autoRefetchInterval, params) => {
  const {url, fetchOptions} = apiMap[apiName](params);
  const queryKey = {
    apiName,
    url,
    params,
    fetchOptions
  }
  const queryParams = autoRefetch ? 
    {
      queryKey, 
      queryFn: querySample, 
      enabled,
      keepPreviousData: true,
      refetchInterval: autoRefetchInterval
    } : {
      queryKey, 
      queryFn: querySample, 
      enabled,
      keepPreviousData: true,
    } 
  const results = useQuery(queryParams);
  return results;  

}

export const useDetailDataQuery = ({
  autoRunning=false,
  programId,
  isOnair,
  period,
  type,
}) => {
  const apiName = 'queryDetailData';
  const autoRefetch = isOnair;
  const autoRefetchInterval = 2000;
  const results = useQueryFunction(
    autoRunning, 
    apiName, 
    autoRefetch, 
    autoRefetchInterval, 
    {programId, isOnair, period, type}
  )
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