import { Claim } from '../models/claim.model';
import { createAction, props } from '@ngrx/store';

const login = createAction('[Auth] Login');
const logout = createAction('[Auth] Logout');
const redirect = createAction('[Auth] Redirect');
const forbidden = createAction('[Auth] Forbidden');

const set = createAction('[Auth] Set', props<{ claim: Claim | null }>());

const reset = createAction('[Auth] Reset');
const error = createAction('[Auth] Error', props<{ error: string }>());

export const authActions = {
  login,
  logout,
  redirect,
  forbidden,
  set,
  reset,
  error,
};
