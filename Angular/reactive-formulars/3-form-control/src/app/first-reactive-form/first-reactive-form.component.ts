import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-reactive-form',
  templateUrl: './first-reactive-form.component.html',
  styleUrl: './first-reactive-form.component.css'
})
export class FirstReactiveFormComponent implements OnInit {
  form = new FormGroup({});
  control = new FormControl('lorem ips');

  ngOnInit() {
    this.form.valueChanges.subscribe((formValue) => {
      console.log('Form value:', formValue)
    });

    this.control.valueChanges.subscribe((controlValue) => {
      console.log('Control Value:', controlValue);
    });
  }

  assignParent() {
    this.control.setParent(this.form);
    console.log('Parent set to form');
    }
}
