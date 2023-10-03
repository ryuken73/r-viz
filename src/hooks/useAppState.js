import * as React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  setShowSummary
} from 'appSlice';

function useAppState() {
  const showSummary = useSelector((state) => state.app.showSummary);
  const dispatch = useDispatch();
  
  const setShowSummaryState = React.useCallback((showSummary) => {
    dispatch(setShowSummary({showSummary}))
  },[dispatch]);

  return {
    showSummary,
    setShowSummaryState,
  }
}

export default useAppState;