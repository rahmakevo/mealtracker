import { Component, OnInit } from '@angular/core';
import { mealTracker } from '.././today/today.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  inputs: ['value']
})
export class HistoryComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}

export interface mealTracker{
  todayName : '',
  todayCalories : '',
  todayDetails : ''
}

export *from './history.component';
