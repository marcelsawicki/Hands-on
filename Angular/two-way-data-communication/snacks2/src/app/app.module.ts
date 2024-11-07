import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SnackComponent } from './snack/snack.component';
import { SnackListComponent } from './snack-list/snack-list.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    SnackComponent,
    SnackListComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
