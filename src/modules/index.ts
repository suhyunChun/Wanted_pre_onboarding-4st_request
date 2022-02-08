import { combineReducers } from 'redux';
import filter from './filter/reducers/method';
import material from '../modules/filter/reducers/material';
import toggle from './filter/reducers/toggle';
import { Filter, Material, ToggleState } from './filter/types';

export type RootState = {
  filter: Filter;
  material: Material;
  toggle: ToggleState;
};

const rootReducer = combineReducers({
  filter,
  material,
  toggle,
});

export default rootReducer;
