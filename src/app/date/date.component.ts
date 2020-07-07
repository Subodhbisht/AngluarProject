import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  dateMessage: Date;

  constructor() {
    setInterval(()=>{
      this.dateMessage = new Date();
    },1000);
  }

  ngOnInit(): void {
  }

}
