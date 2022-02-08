import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { ADD_MATERIAL, ADD_METHOD, CLEAR_METHOD, DELETE_MATERIAL, DELETE_METHOD } from '../actions';
import { Filter, FilterAction, MaterialAction, Material } from '../types';

const initailState: Material = {
  material: [],
};

const material = createReducer<Material, MaterialAction>(initailState, {
  [ADD_MATERIAL]: (state, action) =>
    produce(state, (draft) => {
      draft.material.push(action.payload.material);
      console.log(state);
    }),
  [DELETE_MATERIAL]: (state, action) => ({
    ...state,
    material: state.material.filter((material) => material !== action.payload.material),
  }),
  [CLEAR_METHOD]: (state, action) => ({
    ...state,
    material: [],
  }),
});

export default material;
