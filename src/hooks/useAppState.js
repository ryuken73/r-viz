import * as React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  setShowSummary,
  setGlobalPeriod,
  setOnairProgramIds,
  setOpacityHero
} from 'appSlice';

function useAppState() {
  const showSummary = useSelector((state) => state.app.showSummary);
  const globalPeriod = useSelector((state) => state.app.globalPeriod);
  const onAirProgramIds = useSelector((state) => state.app.onAirProgramIds);
  const opacityHero = useSelector((state) => state.app.opacityHero);
  const dispatch = useDispatch();
  
  const setShowSummaryState = React.useCallback((showSummary) => {
    dispatch(setShowSummary({showSummary}))
  },[dispatch]);

  const setGlobalPeriodState = React.useCallback((globalPeriod) => {
    dispatch(setGlobalPeriod({globalPeriod}))
  },[dispatch]);

  const setOnairProgramIdsState = React.useCallback((onAirProgramIds) => {
    dispatch(setOnairProgramIds({onAirProgramIds}))
  },[dispatch]);

  const setOpacityHeroState = React.useCallback((opacityHero) => {
    dispatch(setOpacityHero({opacityHero}))
  },[dispatch]);

  return {
    showSummary,
    globalPeriod,
    onAirProgramIds,
    opacityHero,
    setShowSummaryState,
    setGlobalPeriodState,
    setOnairProgramIdsState,
    setOpacityHeroState,
  }
}

export default useAppState;