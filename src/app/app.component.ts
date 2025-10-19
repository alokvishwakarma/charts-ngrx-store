import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
//import { Title } from '@angular/platform-browser';
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
//import { getChart } from './selectors/charter.selector';
import { getRange } from './selectors/charter.selector';
//import { ChartComponent } from "ng-apexcharts";

interface ViewModel {
  //count: number;
  //chart: number;
  range: number;
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

  rangeDaysCount = 30;
  rangePatientCount = 120;
  todayDate: Date = new Date();
  todayDateString = (this.todayDate.getMonth()+1) + "/" + this.todayDate.getDate() + "/2025 3:00pm." ;
  range30Colors = ['blue','white'];
  range60Colors = ['white','blue'];
  range90Colors = ['white','blue'];
  barchartValues = [1,15,82,2,10];

  /*
  viewModel$: Observable<ViewModel> = combineLatest([
    this.store.pipe(select(getChart)),
    this.storage.watch('chart', {
      type: 'number',
    }),
  ]).pipe(
    delay(1200),
    map(([chart, storage]) => ({ chart, storage }))
  );
  */

  viewModel$: Observable<ViewModel> = combineLatest([
    this.store.pipe(select(getRange)),
    this.storage.watch('range', {
      type: 'number',
    }),
  ]).pipe(
    delay(1200),
    map(([range, storage]) => ({ range, storage }))
  );

  setRange30(): void {
    this.store.dispatch(CharterActions.setRange30Charter());
    this.rangeDaysCount = 30;
    this.rangePatientCount = 120;
    this.barchartValues = [1,15,82,2,10];
    this.range30Colors = ['blue','white'];
    this.range60Colors = ['white','blue'];
    this.range90Colors = ['white','blue'];
  }
  setRange60(): void {
    this.store.dispatch(CharterActions.setRange60Charter());
    this.rangeDaysCount = 60;
    this.rangePatientCount = 100;
    this.barchartValues = [2,16,78,4,10];
    this.range30Colors = ['white','blue'];
    this.range60Colors = ['blue','white'];
    this.range90Colors = ['white','blue'];
  }
  setRange90(): void {
    this.store.dispatch(CharterActions.setRange90Charter());
    this.rangeDaysCount = 90;
    this.rangePatientCount = 80;
    this.barchartValues = [3,13,83,1],10;
    this.range30Colors = ['white','blue'];
    this.range60Colors = ['white','blue'];
    this.range90Colors = ['blue','white'];
  }

  ngOnInit(): void {
    this.setRange30();
  }

}
