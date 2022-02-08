import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { ADD_METHOD, CLEAR_METHOD, DELETE_METHOD } from '../actions';
import { Filter, FilterAction } from '../types';

const initailState: Filter = {
  filter: [],
};

const filter = createReducer<Filter, FilterAction>(initailState, {
  [ADD_METHOD]: (state, action) =>
    produce(state, (draft) => {
      draft.filter.push(action.payload.method);
    }),
  [DELETE_METHOD]: (state, action) => ({
    ...state,
    filter: state.filter.filter((method) => method !== action.payload.method),
  }),
  [CLEAR_METHOD]: (state, action) => ({
    ...state,
    filter: [],
  }),
});

export default filter;
