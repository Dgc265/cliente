import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CopyrigthComponent } from './copyrigth/copyrigth.component';
import { ViewmodeloComponent } from './viewmodelo/viewmodelo.component';

@NgModule({
  declarations: [
    AppComponent,
    CopyrigthComponent,
    ViewmodeloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
