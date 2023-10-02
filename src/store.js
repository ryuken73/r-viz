import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import appReducer from 'appSlice';
import { createLocalStorageSaver } from 'lib/saveStateMiddleware';
import { loadState } from 'lib/localStorage';
import CONSTANTS from 'config/constants';

const { CONFIG_LOCAL_STORAGE_KEY, LOGLESS_REDUX_ACTIONS = [] } = CONSTANTS;

const logger = createLogger({
  predicate: (getState, action) => !LOGLESS_REDUX_ACTIONS.includes(action.type),
});
const saver = createLocalStorageSaver({
  predicate: (action) => !LOGLESS_REDUX_ACTIONS.includes(action.type),
})

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger).concat(saver),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: loadState(CONFIG_LOCAL_STORAGE_KEY),
});