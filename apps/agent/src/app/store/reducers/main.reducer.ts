import { mainActions } from '../actions/main.actions';
import { MainState } from '../states/main.state';
import { Action, createReducer, On, on } from '@ngrx/store';
import produce from 'immer';

const initialState: MainState = {
  count: 0,
};

const ons: On<MainState>[] = [
  on(mainActions.count, (state, {}) =>
    produce<MainState>(state, (draft) => {
      draft.count = state.count + 1;
    })
  ),
  on(mainActions.reset, (state, {}) =>
    produce<MainState>(state, (draft) => {
      draft.count = 0;
    })
  ),
];

export function mainReducer(
  state: MainState | undefined,
  action: Action
): MainState {
  return createReducer(initialState, ...ons)(state, action);
}
