import { Component, OnInit } from '@angular/core';
import { BackandService } from '@backand/angular2-sdk';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor() {

  }
  ngOnInit() {

  }
}
