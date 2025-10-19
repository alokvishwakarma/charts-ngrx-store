import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCharter from './charter.reducer';

export interface AppState {
  //[fromCounter.counterFeatureKey]: fromCounter.CounterState;
  [fromCharter.charterFeatureKey]: fromCharter.CharterState;
}

export const reducers: ActionReducerMap<AppState> = {
  //[fromCounter.counterFeatureKey]: fromCounter.reducer,
  [fromCharter.charterFeatureKey]: fromCharter.reducer,
};



export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
