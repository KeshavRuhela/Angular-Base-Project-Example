import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Making1Component } from './myComponents/making1/making1.component';
import { Making2Component } from './myComponents/making2/making2.component';
import { CartComponent } from './cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Windows11Component } from './windows11/windows11.component';

@NgModule({
  declarations: [
    AppComponent,
    Making1Component,
    Making2Component,
    CartComponent,
    Windows11Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
