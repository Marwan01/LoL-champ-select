import {Component, Inject, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SelectEnemyComponent} from './select-enemy/select-enemy.component';
import data from './../assets/test.json';

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
  champions = data;
  selectedEnemy : string;
  @ViewChild(SelectEnemyComponent, {static: true}) enemy: SelectEnemyComponent;


  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.selectedEnemy = this.enemy.enemy;
    let counters: string[];
    let enemyChampTips: string[];
    let bestPickName: string;
    this.champions.forEach(element => {
      if(element.name === this.selectedEnemy) {
        counters = element.counters;
        enemyChampTips = element.tips;
        bestPickName = element.counters[0];
      }
    });
    let bestPick = this.findChamp(bestPickName); // to fix ( dons't work)
    console.log(bestPickName)
    const dialogRef = this.dialog.open(SubmitDialog, {
      width: '50vh',
      height: '50vh',
      data: {enemyChamp: this.selectedEnemy, counters: counters, bestPick: bestPickName,  enemyChampTips:  enemyChampTips , bestPickIcon: 'https://ddragon.leagueoflegends.com/cdn/9.18.1/img/champion/Akali.png', description: 'icon and description are currently hardcoded'}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // this.name = result;
    });
  }

  findChamp(champName) {
    return this.champions.find((e) => {
      if(e.name === champName) {
        return e;
      }
    })
  }
}



@Component({
  selector: 'submit-dialog',
  templateUrl: './submit-dialog.html',
})
export class SubmitDialog {

  constructor(
    public dialogRef: MatDialogRef<SubmitDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}