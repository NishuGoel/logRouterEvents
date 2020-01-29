import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import {MainPageComponent} from './main-page.component';
import {PageNotFoundComponent} from './pagenotfound.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, MainPageComponent, HelloComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
