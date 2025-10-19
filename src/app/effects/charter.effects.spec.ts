import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { StorageMap } from '@ngx-pwa/local-storage';
import { CharterActions } from '../actions/charter.actions';
import { CharterEffects } from './charter.effects';
import { Observable, of } from 'rxjs';
import { Spy, provideAutoSpy } from 'jasmine-auto-spies';
import { SubscriberSpy, subscribeSpyTo } from '@hirez_io/observer-spy';
import { Action } from '@ngrx/store';

describe('CharterEffects', () => {
  let actions$: Observable<Action>;
  let effects: CharterEffects;
  let storage: StorageMap;
  let storageMapSpy: Spy<StorageMap>;
  let observerSpy: SubscriberSpy<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CharterEffects,
        provideMockActions(() => actions$),
        provideAutoSpy(StorageMap),
      ],
    });
    effects = TestBed.inject<CharterEffects>(CharterEffects);
    observerSpy = undefined;
    actions$ = undefined;
    storageMapSpy = TestBed.inject<any>(StorageMap);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should call storage on action', () => {
    actions$ = of(CharterActions.storeCharter);
    storageMapSpy.set.and.nextWith();
    observerSpy = subscribeSpyTo(effects.setCharter$);
    expect(observerSpy.getValuesLength()).toBe(1);
  });
});
