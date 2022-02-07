import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { ADD_METHOD, DELETE_METHOD } from './actions';
import { Filter, FilterAction } from './types';

const initailState: Filter = {
  filter: [],
};

const filter = createReducer<Filter, FilterAction>(initailState, {
  [ADD_METHOD]: (state, action) =>
    produce(state, (draft) => {
      draft.filter.push(action.payload.method);
    }),
  [DELETE_METHOD]: (state, action) =>
    produce(state, (draft) => {
      draft.filter.filter((method) => method !== action.payload.method);
    }),
});

export default filter;
