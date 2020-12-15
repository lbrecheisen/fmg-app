import { Agent } from '../../models/agents/agent.model';
import { createAction, props } from '@ngrx/store';

const get = createAction('[Agent] Get', props<{ id: string }>());
const set = createAction('[Agent] Set', props<{ agent: Agent | null }>());
const error = createAction('[Agent] Error', props<{ error: string }>());

export const agentActions = {
  get,
  set,
  error,
};
