import { agentActions } from './agent.actions';
import { AgentState } from './agent.state';
import { Action, createReducer, On, on } from '@ngrx/store';
import { produce } from 'immer';

const initialState: AgentState = {
  agent: null,
  isLoading: false,
  error: null,
};

const ons: On<AgentState>[] = [
  on(agentActions.get, (state, {}) =>
    produce<AgentState>(state, (draft) => {
      draft.isLoading = true;
    })
  ),
  on(agentActions.set, (state, { agent }) =>
    produce<AgentState>(state, (draft) => {
      draft.isLoading = false;
      draft.agent = agent;
    })
  ),
  on(agentActions.error, (state, { error }) =>
    produce<AgentState>(state, (draft) => {
      draft.isLoading = false;
      draft.error = error;
    })
  ),
];

export function agentReducer(
  state: AgentState | undefined,
  action: Action
): AgentState {
  return createReducer(initialState, ...ons)(state, action);
}
