import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { ADD_MATERIAL, ADD_METHOD, CLEAR_METHOD, DELETE_METHOD } from './actions';
import { Filter, FilterAction, MaterialAction } from './types';

const initailState: Filter = {
  filter: [],
  material: [],
};

export const filter = createReducer<Filter, FilterAction>(initailState, {
  [ADD_METHOD]: (state, action) =>
    produce(state, (draft) => {
      draft.filter.push(action.payload.method);
    }),
  /* [DELETE_METHOD]: (state, action) =>
    produce(state, (draft) => {
      draft.filter.filter((method) => method !== action.payload.method);
    }), */
  [DELETE_METHOD]: (state, action) => ({
    ...state,
    filter: state.filter.filter((method) => method !== action.payload.method),
  }),
  [CLEAR_METHOD]: (state, action) => ({
    ...state,
    filter: [],
  }),
});

export const material = createReducer<Filter, MaterialAction>(initailState, {
  [ADD_MATERIAL]: (state, action) =>
    produce(state, (draft) => {
      draft.material.push(action.payload.material);
    }),
});
