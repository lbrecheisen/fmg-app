import { authActions } from './auth.actions';
import { AuthState } from './auth.state';
import { Action, createReducer, on, On } from '@ngrx/store';
import { produce } from 'immer';

const initial: AuthState = {
  claim: null,
  isLoading: false,
  error: null,
};

const ons: On<AuthState>[] = [
  on(authActions.login),
  on(authActions.logout),
  on(authActions.redirect),
  on(authActions.forbidden),
  on(authActions.set, (state, { claim }) =>
    produce<AuthState>(state, (draft) => {
      draft.claim = claim;
    })
  ),
  on(authActions.reset, (state, {}) =>
    produce<AuthState>(state, (draft) => {
      draft.isLoading = false;
      draft.error = null;
    })
  ),
  on(authActions.error, (state, { error }) =>
    produce<AuthState>(state, (draft) => {
      draft.isLoading = false;
      draft.error = error;
    })
  ),
];

export function authReducer(
  state: AuthState | undefined,
  action: Action
): AuthState {
  return createReducer(initial, ...ons)(state, action);
}
