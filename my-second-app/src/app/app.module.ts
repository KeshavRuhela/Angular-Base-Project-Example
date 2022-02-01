import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WatchComponent } from './watch/watch.component';
import { Watch2Component } from './watch2/watch2.component';
import { Watch3Component } from './watch3/watch3.component';
import { Watch4Component } from './watch4/watch4.component';

@NgModule({
  declarations: [
    AppComponent,
    WatchComponent,
    Watch2Component,
    Watch3Component,
    Watch4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
