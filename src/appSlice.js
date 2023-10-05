import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  opacityHero: 1,
  showSummary: false,
  globalPeriod: 'daily',
  onAirProgramIds: []
};

export const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setShowSummary: (state, action) => {
      const { payload } = action;
      const { showSummary } = payload;
      state.showSummary = showSummary;
    },
    setGlobalPeriod: (state, action) => {
      const { payload } = action;
      const { globalPeriod } = payload;
      state.globalPeriod = globalPeriod;
    },
    setOnairProgramIds: (state, action) => {
      const { payload } = action;
      const { onAirProgramIds } = payload;
      state.onAirProgramIds = onAirProgramIds;
    },
    setOpacityHero: (state, action) => {
      const { payload } = action;
      const { opacityHero } = payload;
      state.opacityHero = opacityHero;
    },
  },
})

export const {
  setShowSummary,
  setGlobalPeriod,
  setOnairProgramIds,
  setOpacityHero
} = appSlice.actions;

export default appSlice.reducer;