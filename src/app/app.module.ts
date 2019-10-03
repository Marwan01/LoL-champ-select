import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { SelectRoleComponent } from './select-role/select-role.component';
import {MatSelectModule} from '@angular/material/select';
import { SelectPowerComponent } from './select-power/select-power.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule, MatInputModule} from '@angular/material';
import { SelectEnemyComponent } from './select-enemy/select-enemy.component';
import {MatDialogModule} from '@angular/material/dialog';
import {SubmitDialog} from './app.component';
import { ChampProfileComponent } from './champ-profile/champ-profile.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    SelectRoleComponent,
    SelectPowerComponent,
    SelectEnemyComponent,
    SubmitDialog,
    ChampProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule
  ],
  entryComponents: [SubmitDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
