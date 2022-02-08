import { deprecated } from 'typesafe-actions';

const { createStandardAction } = deprecated;

export const ADD_METHOD = 'filter/ADD_METHOD';
export const DELETE_METHOD = 'filter/DELETE_METHOD';
export const CLEAR_METHOD = 'filter/CLEAR_METHOD';

export const ADD_MATERIAL = 'material/ADD_MATERIAL';
export const DELETE_MATERIAL = 'material/DELETE_MATERIAL';
export const CLEAR_MATERIAL = 'material/CLEAR_MATERIAL';

export const addMethod = createStandardAction(ADD_METHOD)<{
  method: string;
}>();
export const deleteMethod = createStandardAction(DELETE_METHOD)<{
  method: string;
}>();
export const clearMehotd = createStandardAction(CLEAR_METHOD)();

export const addMaterial = createStandardAction(ADD_MATERIAL)<{
  material: string;
}>();
export const deleteMaterial = createStandardAction(DELETE_MATERIAL)<{
  material: string;
}>();
export const clearMaterial = createStandardAction(CLEAR_MATERIAL)();
