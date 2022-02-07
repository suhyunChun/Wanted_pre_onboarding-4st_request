import { deprecated } from 'typesafe-actions';

const { createStandardAction } = deprecated;

export const ADD_METHOD = 'filter/ADD_METHOD';

export const addMethod = createStandardAction(ADD_METHOD)<{
  method: string;
}>();
