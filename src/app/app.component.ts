import {Component, Inject, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import data from './../assets/data.json';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface CounterItem {
  icon: string;
  position: number;
  name: String;
}

const ELEMENT_DATA: CounterItem[] = [
  {position: 1, icon: 'http://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Fiora.png', name: "Fiora"},
  {position: 2, icon: 'http://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Fizz.png', name: "Fizz" },
  {position: 3, icon: 'http://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Ivern.png', name: "Ivern"},
  {position: 4, icon: 'http://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Fiora.png', name: "Fiora"},
  {position: 5, icon: 'http://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Fizz.png', name: "Fizz"},
  {position: 6, icon: 'http://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Ivern.png', name: "Ivern"},
  {position: 7, icon: 'http://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Fiora.png', name: "Fiora"},
  {position: 8, icon: 'http://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Fizz.png', name: "Fizz"},
  {position: 9, icon: 'http://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Ivern.png', name: "Ivern"}
];

let CHAMP_DATA: CounterItem[] = [
  {position: 1, icon: 'http://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Fiora.png', name: "test guy"}
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  stateCtrl = new FormControl();
  filteredChamps: Observable<any>;
  champions = data;
  enemyChamp: string;
  displayedColumns: string[] = ['position', 'icon', 'name'];
  

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

  selectedEnemy : string;
  dataSource = ELEMENT_DATA;

  getCounters(champName) {
    let counterItem : CounterItem;
    this.enemyChamp = champName;
    data.forEach(element => {
      if( element.name === this.enemyChamp ) {
        let counterNames = element.counters;
        counterNames.forEach(e => {
          data.forEach(e2 => {
            if(e === e2.name) {
              console.log(e2.icon)
            }
          });
        });
      }
    });
  }

}