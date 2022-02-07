import { combineReducers } from 'redux';
import filter from './filter/reducer';
import { Filter } from './filter/types';

export type RootState = {
  filter: Filter;
};

const rootReducer = combineReducers({
  filter,
});

export default rootReducer;
