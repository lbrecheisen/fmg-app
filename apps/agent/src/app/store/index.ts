import { MainState } from './states/main.state';
import { fromLead } from '@fmg/domain';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const main = createFeatureSelector<MainState>('main');

export const fromMain = {
  count: createSelector(main, (state) => state.count),
  isLoading: createSelector(fromLead.isLoading, (...loadings) =>
    loadings.reduce((previous, current) => previous || current)
  ),
  errors: createSelector(fromLead.error, (...errors) =>
    errors.filter((error): error is string => !!error)
  ),
};

export { mainActions } from './actions/main.actions';
