import { createAction } from '@ngrx/store';

const count = createAction('[Main] Count');

const reset = createAction('[Main] Reset');

export const mainActions = {
  count,
  reset,
};
