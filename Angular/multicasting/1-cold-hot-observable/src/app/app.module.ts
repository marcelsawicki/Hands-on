import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColdComponent } from './cold/cold.component';
import { HotComponent } from './hot/hot.component';

@NgModule({
  declarations: [
    AppComponent,
    ColdComponent,
    HotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
