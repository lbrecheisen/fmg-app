import { Lead } from '../../models/leads/lead.model';
import { createAction, props } from '@ngrx/store';

const set = createAction('[Lead] Set', props<{ lead: Lead | null }>());
const insert = createAction('[Lead] Insert', props<{ lead: Lead }>());
const reset = createAction('[Lead] Reset');
const error = createAction('[Lead] Error', props<{ error: string }>());

export const leadActions = {
  set,
  insert,
  reset,
  error,
};
