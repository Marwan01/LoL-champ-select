import {Component, Inject, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import data from './../assets/data.json';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface PeriodicElement {
  icon: string;
  position: number;
  name: String;
  tags: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, icon: 'http://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Fiora.png', name: "Fiora", tags: 'Physical Damage, Fighter'},
  {position: 2, icon: 'http://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Fizz.png', name: "Fizz", tags: 'Fighter", Magical Damage'},
  {position: 3, icon: 'http://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Ivern.png', name: "Ivern", tags: 'Support", Magical Damage'},
  {position: 4, icon: 'http://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Fiora.png', name: "Fiora", tags: 'Physical Damage, Fighter'},
  {position: 5, icon: 'http://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Fizz.png', name: "Fizz", tags: 'Fighter", Magical Damage'},
  {position: 6, icon: 'http://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Ivern.png', name: "Ivern", tags: 'Support", Magical Damage'},
  {position: 7, icon: 'http://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Fiora.png', name: "Fiora", tags: 'Physical Damage, Fighter'},
  {position: 8, icon: 'http://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Fizz.png', name: "Fizz", tags: 'Fighter", Magical Damage'},
  {position: 9, icon: 'http://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Ivern.png', name: "Ivern", tags: 'Support", Magical Damage'}
];


export interface DialogData {
  enemyChamp: string;
  counters: string[];
  bestPick: string;
  bestPickIcon: string;
  enemyChampTips: string[];
  description: string;
  // add stats
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  stateCtrl = new FormControl();
  filteredStates: Observable<any>;
  champions = data;
  enemyChamp: string;
  displayedColumns: string[] = ['position', 'icon', 'name', 'tags'];
  

  constructor() {
    this.filteredStates = this.stateCtrl.valueChanges
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


}