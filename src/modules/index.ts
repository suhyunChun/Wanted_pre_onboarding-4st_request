import { combineReducers } from 'redux';
import { filter, material } from './filter/reducer';
import { Filter } from './filter/types';

export type RootState = {
  filter: Filter;
  material: Filter;
};

const rootReducer = combineReducers({
  filter,
  material,
});

export default rootReducer;
