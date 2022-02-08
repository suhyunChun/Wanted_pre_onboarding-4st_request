import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { HANDLE_TOGGLE_ON } from '../actions';
import { ToggleAction, ToggleState } from '../types';

const initailState: ToggleState = {
  ToggleOn: false,
};

const toggle = createReducer(initailState, {
  [HANDLE_TOGGLE_ON]: (state) => ({
    ...state,
    ToggleOn: !state.ToggleOn,
  }),
});

export default toggle;
