import {Component, Inject, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SelectEnemyComponent} from './select-enemy/select-enemy.component';
import data from './../assets/test.json';

export interface DialogData {
  name: string;
  icon: string;
  tips: [];
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
  // ngAfterViewInit() {
  //   this.getChildProperty();
  // }
  // getChildProperty() {
  //  this.champions = this.enemy.champions;
  // }
  name: string;
  icon: string;
  tips: [];
  description: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.selectedEnemy = this.enemy.enemy;
    console.log(this.findEnemyCounters(this.selectedEnemy))
    const dialogRef = this.dialog.open(SubmitDialog, {
      width: '250px',
      data: {name: this.selectedEnemy, icon: this.icon, tips: this.tips, description: this.description}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.name = result;
    });
  }
  findEnemyCounters(champ) : string {
    this.champions.find(item => {
      if(item.name == champ)
        console.log('found')
        return item.counters[0]
    })
    return 'not found'
      
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