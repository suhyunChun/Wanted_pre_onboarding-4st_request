import { combineReducers } from 'redux';
import filter from './filter/reducer';
import material from '../modules/filter/reducers/material';
import { Filter, Material } from './filter/types';

export type RootState = {
  filter: Filter;
  material: Material;
};

const rootReducer = combineReducers({
  filter,
  material,
});

export default rootReducer;
