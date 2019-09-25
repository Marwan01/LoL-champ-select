import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import data from '../../assets/test.json';

@Component({
  selector: 'app-select-enemy',
  templateUrl: './select-enemy.component.html',
  styleUrls: ['./select-enemy.component.css']
})
export class SelectEnemyComponent  {
  stateCtrl = new FormControl();
  filteredStates: Observable<any>;
  champions = data;
  enemy:string;

  constructor() {
    console.log('Reading local json files');
    console.log(data);
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.champions.slice())
      );
  }

  private _filterStates(value: string) {
    const filterValue = value.toLowerCase();
    this.enemy = value;
    return this.champions.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }
}
