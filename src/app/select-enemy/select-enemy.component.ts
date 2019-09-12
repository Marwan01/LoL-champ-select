import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface Champion {
  icon: string;
  name: string;
  powers: string;
}

@Component({
  selector: 'app-select-enemy',
  templateUrl: './select-enemy.component.html',
  styleUrls: ['./select-enemy.component.css']
})
export class SelectEnemyComponent  {
  stateCtrl = new FormControl();
  filteredStates: Observable<Champion[]>;

  champions: Champion[] = [
    {
      name: 'Anivia',
      powers: 'AP',
      // https://commons.wikimedia.org/wiki/File:icon_of_Arkansas.svg
      icon: 'https://www.mobafire.com/images/avatars/anivia-classic.png'
    },
    {
      name: 'Tryndamere',
      powers: 'AD',
      // https://commons.wikimedia.org/wiki/File:icon_of_California.svg
      icon: 'https://www.mobafire.com/images/avatars/tryndamere-classic.png'
    },
    {
      name: 'Annie',
      powers: 'AP',
      // https://commons.wikimedia.org/wiki/File:icon_of_Florida.svg
      icon: 'https://www.mobafire.com/images/avatars/annie-classic.png'
    },
    {
      name: 'Leblanc',
      powers: 'AP',
      // https://commons.wikimedia.org/wiki/File:icon_of_Texas.svg
      icon: 'https://www.mobafire.com/images/avatars/leblanc-classic.png'
    }
  ];

  constructor() {
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.champions.slice())
      );
  }

  private _filterStates(value: string): Champion[] {
    const filterValue = value.toLowerCase();

    return this.champions.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }
}
