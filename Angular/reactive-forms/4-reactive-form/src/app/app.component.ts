import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomFormComponent } from "./custom-form/custom-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CustomFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '4-reactive-form';
}
