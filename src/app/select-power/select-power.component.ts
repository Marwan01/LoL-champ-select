import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-power',
  templateUrl: './select-power.component.html',
  styleUrls: ['./select-power.component.css']
})
export class SelectPowerComponent implements OnInit {
  ap = false;
  ad = false;
  tank = false;
  utility = false;
  constructor() { }

  ngOnInit() {
  }

}
