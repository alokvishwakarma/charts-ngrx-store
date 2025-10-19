import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { StorageMap } from '@ngx-pwa/local-storage';
import { map, switchMap } from 'rxjs/operators';
import { CharterActions } from '../actions/charter.actions';

@Injectable()
export class CharterEffects {
  actions$ = inject(Actions);
  storage = inject(StorageMap);

  setCharter$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CharterActions.storeCharter),
        map(action => action.val),
        switchMap(val =>
          this.storage.set('chart', val).pipe(map(() => console.log(val)))
        )
      ),
    { dispatch: false }
  );
}
