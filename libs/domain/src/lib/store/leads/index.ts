import { LeadState } from './lead.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const lead = createFeatureSelector<LeadState>('lead');

export const fromLead = {
  lead: createSelector(lead, (state) => state.lead),
  isLoading: createSelector(lead, (state) => state.isLoading),
  error: createSelector(lead, (state) => state.error),
};

export { leadActions } from './lead.actions';
