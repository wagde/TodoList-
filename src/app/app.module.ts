import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from   '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { TodolistComponent } from './todolist/todolist.component';
import {TasktranService} from './services/tasktran.service';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TasktranService],
  bootstrap: [AppComponent]
})
export class AppModule { }
