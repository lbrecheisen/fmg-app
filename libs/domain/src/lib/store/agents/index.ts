import { AgentState } from './agent.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const agent = createFeatureSelector<AgentState>('agent');

export const fromAgent = {
  agent: createSelector(agent, (state) => state.agent),
  isLoading: createSelector(agent, (state) => state.isLoading),
  error: createSelector(agent, (state) => state.error),
};

export { agentActions } from './agent.actions';
