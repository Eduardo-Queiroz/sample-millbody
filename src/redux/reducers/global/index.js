import {createActions, createReducer} from 'reduxsauce';

const INITIAL_STATE = {
  isVisibleError: false,
  messageError: '',
  hasConnectivity: true,
  currentRoute: 'First',
};

export const {Types, Creators: Actions} = createActions({
  globalChangeConnectivity: payload => ({
    type: 'GLOBAL_CHANGE_CONNECTIVITY',
    payload,
  }),
  globalCurrentRoute: payload => ({
    type: 'GLOBAL_CURRENT_ROUTE',
    payload,
  }),
});

export const HANDLERS = {
  [Types.GLOBAL_CHANGE_CONNECTIVITY]: (state, {payload}) => ({
    ...state,
    hasConnectivity: payload,
  }),
  [Types.GLOBAL_CURRENT_ROUTE]: (state, {payload}) => ({
    ...state,
    currentRoute: payload,
  }),
};

export const Reducer = createReducer(INITIAL_STATE, HANDLERS);
