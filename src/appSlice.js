import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showSummary: false,
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
  },
})

export const {
  setShowSummary
} = appSlice.actions;

export default appSlice.reducer;