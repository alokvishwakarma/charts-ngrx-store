import { AppState } from '../reducers';
import { createSelector } from '@ngrx/store';

export const selectCharterState = (state: AppState) => state.charter;
export const getChart = createSelector(
  selectCharterState,
  charter => charter.chart
);

export const getRange = createSelector(
  selectCharterState,
  charter => charter.range
);
