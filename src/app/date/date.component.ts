import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  dateMessage: string;
  counter: number = 0;

  constructor() {
    setInterval(() => {
      this.counter++;
      let currentDate = new Date();
      this.dateMessage = currentDate.toDateString() + " " + currentDate.toLocaleTimeString();
    }, 1000);
  }

  ngOnInit() {
  }

}
