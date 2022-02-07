import { deprecated } from 'typesafe-actions';

const { createStandardAction } = deprecated;

export const ADD_METHOD = 'filter/ADD_METHOD';
export const DELETE_METHOD = 'filter/DELETE_METHOD';

export const ADD_MATERIAL = 'filter/ADD_MATERIAL';
export const DELETE_MATERIAL = 'filter/DELETE_MATERIAL';

export const ALL_RESET = 'filter/ALL_RESET';

export const addMethod = createStandardAction(ADD_METHOD)<{
  method: string;
}>();
export const deleteMethod = createStandardAction(DELETE_METHOD)<{
  method: string;
}>();

export const addMaterial = createStandardAction(ADD_MATERIAL)<{
  material: string;
}>();
export const deleteMaterial = createStandardAction(DELETE_MATERIAL)<{
  material: string;
}>();

export const allReset = createStandardAction(ALL_RESET)();
