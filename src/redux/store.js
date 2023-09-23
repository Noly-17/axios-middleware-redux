import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';

import axiosMiddleware from '../../config/axios-middleware';

import userReducer from './reducer';

export const store = createStore(userReducer, applyMiddleware(axiosMiddleware));
