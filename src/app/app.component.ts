import {Component, Inject, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import data from './../assets/data.json';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface CounterItem {
  icon: string;
  position: number;
  name: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  CHAMP_DATA: CounterItem[] = []
  stateCtrl = new FormControl();
  filteredChamps: Observable<any>;
  champions = data;
  enemyChamp: string;

  displayedColumns: string[] = ['position', 'icon', 'name'];
  dataSource = new MatTableDataSource(this.CHAMP_DATA);

  constructor() {
    this.filteredChamps = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.champions.slice())
      );
  }

  private _filterStates(value: string) {
    const filterValue = value.toLowerCase();
    this.enemyChamp = value;
    return this.champions.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
    
  }

  clear() {
    this.CHAMP_DATA = [];
    this.dataSource = new MatTableDataSource(this.CHAMP_DATA);
  }

  getCounters(champName) {
    this.enemyChamp = champName;
    data.forEach(element => {
      if( element.name === this.enemyChamp ) {
        let counterItem : CounterItem;
        let counterNames = element.counters;
        let i = 1;
        counterNames.forEach(e => {
          data.forEach(e2 => {
            if(e === e2.name) {
              counterItem = {
                position: i++,
                name: e,
                icon: e2.icon
              }
              return this.CHAMP_DATA.push(counterItem)
            }
          });
        });
        this.dataSource._updateChangeSubscription();
      }
    });

  }
}