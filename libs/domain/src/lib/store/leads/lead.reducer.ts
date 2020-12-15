import { leadActions } from './lead.actions';
import { LeadState } from './lead.state';
import { Action, createReducer, On, on } from '@ngrx/store';
import { produce } from 'immer';

const initialState: LeadState = {
  lead: null,
  isLoading: false,
  error: null,
};

const ons: On<LeadState>[] = [
  on(leadActions.insert, (state, {}) =>
    produce<LeadState>(state, (draft) => {
      draft.isLoading = true;
    })
  ),
  on(leadActions.set, (state, { lead }) =>
    produce<LeadState>(state, (draft) => {
      draft.isLoading = false;
      draft.lead = lead;
    })
  ),
  on(leadActions.reset, (state, {}) =>
    produce<LeadState>(state, (draft) => {
      draft.lead = null;
      draft.isLoading = false;
      draft.error = null;
    })
  ),
  on(leadActions.error, (state, { error }) =>
    produce<LeadState>(state, (draft) => {
      draft.isLoading = false;
      draft.error = error;
    })
  ),
];

export function leadReducer(
  state: LeadState | undefined,
  action: Action
): LeadState {
  return createReducer(initialState, ...ons)(state, action);
}
