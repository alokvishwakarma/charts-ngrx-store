import { Action, createReducer, on } from '@ngrx/store';
import { CharterActions } from '../actions/charter.actions';

export const charterFeatureKey = 'charter';

export interface CharterState {
  chart: number;
  range: number;
}

export const initialState: CharterState = {
  chart: 0,
  range: 30,
};

const charterReducer = createReducer(
  initialState,
  on(CharterActions.setRange30Charter, state => ({
    ...state,
    chart: state.chart + 10,
    range: 30,
    valueAAAA: 1001,
  })),
  on(CharterActions.setRange60Charter, state => ({
    ...state,
    chart: state.chart + 100,
    range: 60,
  })),
  on(CharterActions.setRange90Charter, state => ({
    ...state,
    chart: state.chart + 1000,
    range: 90,
  })),
);

export function reducer(state: CharterState | undefined, action: Action) {
  return charterReducer(state, action);
}
