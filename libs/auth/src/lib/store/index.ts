import { AuthState } from './auth.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const auth = createFeatureSelector<AuthState>('auth');

export const fromAuth = {
  claim: createSelector(auth, (state) => state.claim),
  isAuthenticated: createSelector(auth, (state) => !!state.claim),
};

export { authActions } from './auth.actions';
