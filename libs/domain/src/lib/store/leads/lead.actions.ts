import { Lead } from '../../models/leads/lead.model';
import { createAction, props } from '@ngrx/store';

const get = createAction('[Lead] Get', props<{ key: string }>());
const set = createAction('[Lead] Set', props<{ lead: Lead | null }>());
const reset = createAction('[Lead] Reset');
const error = createAction('[Lead] Error', props<{ error: string }>());

export const leadActions = {
  get,
  set,
  reset,
  error,
};
