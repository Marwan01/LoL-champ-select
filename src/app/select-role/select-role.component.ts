import { Component, OnInit } from '@angular/core';


export interface Lane {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-select-role',
  templateUrl: './select-role.component.html',
  styleUrls: ['./select-role.component.css']
})
export class SelectRoleComponent implements OnInit {

  lanes: Lane[] = [
    {value: 'top-0', viewValue: 'Top'},
    {value: 'mid-1', viewValue: 'Mid'},
    {value: 'jungle-2', viewValue: 'Jungle'},
    {value: 'adc-3', viewValue: 'Adc'},
    {value: 'support-4', viewValue: 'Support'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
