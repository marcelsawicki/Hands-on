import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
  <input [formControl]="form.controls['control']" />
  <br />
  <br />
  <button (click)='setParent()'>set parent</button>
  &nbsp;
  <button (click)='updateForm()'>updateForm</button>
  `,
})
export class CustomFormComponent implements OnInit{
  form = new FormGroup({
    control: new FormControl('lorem ipsum')
  });

  ngOnInit(): void {
    this.form.valueChanges.subscribe((formValue) => { 
      console.log('Form value:', formValue);
    });

    this.form.controls['control'].valueChanges.subscribe((controlValue) => { 
      console.log('Control Value:', controlValue);
      console.log(
        'Is form parent: ',
        this.form.controls['control'].parent === this.form
      );
    });
  }

  setParent() {
    this.form.controls['control'].setParent(null);
    console.log('Parent set to null');
  }

  updateForm() {
    this.form.updateValueAndValidity();
  }
}
