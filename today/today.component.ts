import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
export interface mealTracker{
  todayName:'',
  todayCalories : '',
  todayDetails : ''
}

export *from './today.component';
