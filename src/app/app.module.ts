import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { PublicZoneModule } from './public_zone/public_zone.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    PublicZoneModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
