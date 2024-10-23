import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject-example',
  templateUrl: './subject-example.component.html',
  styleUrl: './subject-example.component.css'
})
export class SubjectExampleComponent {
  constructor() {
    const plainSubject$ = new Subject();
    plainSubject$.next(10);
    plainSubject$.next(20);

    plainSubject$.subscribe({
      next: (message) => console.log(message),
      error: (error) => console.log(error),
      complete: () => console.log(),
    });

    plainSubject$.subscribe({
      next: (message) => console.log(message),
      error: (error) => console.log(error),
      complete: () => console.log(),
    });

    plainSubject$.next(30);
  }
}
