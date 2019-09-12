import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { SelectRoleComponent } from './select-role/select-role.component';
import {MatSelectModule} from '@angular/material/select';
import { SelectPowerComponent } from './select-power/select-power.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectRoleComponent,
    SelectPowerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
