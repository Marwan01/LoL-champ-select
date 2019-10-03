import { Component, OnInit } from '@angular/core';
import data from '../../assets/test.json';


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

@Component({
  selector: 'app-champ-profile',
  templateUrl: './champ-profile.component.html',
  styleUrls: ['./champ-profile.component.css']
})
export class ChampProfileComponent implements OnInit {
  displayedColumns: string[] = ['position', 'icon', 'name', 'tags'];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit() {
  }

}
