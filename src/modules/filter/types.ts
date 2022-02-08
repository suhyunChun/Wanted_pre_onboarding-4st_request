import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type FilterAction = ActionType<typeof actions>;
export type MaterialAction = ActionType<typeof actions>;
export type ToggleAction = ActionType<typeof actions>;

export type Filter = {
  filter: Array<string>;
};

export type Material = {
  material: Array<string>;
};

export type ToggleState = {
  ToggleOn: boolean;
};
