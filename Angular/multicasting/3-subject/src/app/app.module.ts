import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectExampleComponent } from './subject-example/subject-example.component';
import { ReplaySubjectExampleComponent } from './replay-subject-example/replay-subject-example.component';
import { BehaviourSubjectExampleComponent } from './behaviour-subject-example/behaviour-subject-example.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectExampleComponent,
    ReplaySubjectExampleComponent,
    BehaviourSubjectExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
