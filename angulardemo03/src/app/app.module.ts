import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//引入表單相關模塊，才可用於雙向綁定
import { FormsModule } from '@angular/forms';
//引入並併配置服務
import {StorageService} from './services/storage.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './components/todolist/todolist.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,//配置formsmodule
  ],
  providers: [StorageService],//配置服務
  bootstrap: [AppComponent],

})
export class AppModule { }
