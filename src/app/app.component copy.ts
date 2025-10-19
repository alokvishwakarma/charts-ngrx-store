import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Store, select } from '@ngrx/store';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Observable, combineLatest } from 'rxjs';
import { delay, map } from 'rxjs/operators';
//import { CounterActions } from './actions/counter.actions';
import { CharterActions } from './actions/charter.actions';
import { HeaderComponent } from './header.component';
import { HelloComponent } from './hello.component';
import { RangeComponent } from './range.component';
import { AppState } from './reducers';
//import { getCount } from './selectors/oldcounter.selector';
import { getChart } from './selectors/charter.selector';

interface ViewModel {
  //count: number;
  chart: number;
  //range: number;
  storage: number;
}

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [NgIf, HeaderComponent, HelloComponent, RangeComponent, AsyncPipe, NgbDropdownModule],
})
export class AppComponent implements OnInit {
  name = 'Clinic Outcomes';
  store = inject(Store<AppState>);
  storage = inject(StorageMap);
  viewModel$: Observable<ViewModel> = combineLatest([
    this.store.pipe(select(getChart)),
    this.storage.watch('chart', {
      type: 'number',
    }),
  ]).pipe(
    delay(1200),
    map(([chart, storage]) => ({ chart, storage }))
  );

  setRange30(): void {
    this.store.dispatch(CharterActions.setRange30Charter());
  }
  setRange60(): void {
    this.store.dispatch(CharterActions.setRange60Charter());
  }
  setRange90(): void {
    this.store.dispatch(CharterActions.setRange90Charter());
  }

  ngOnInit(): void {
    this.setRange30();
  }

}
