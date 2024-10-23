import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behaviour-subject-example',
  templateUrl: './behaviour-subject-example.component.html',
  styleUrl: './behaviour-subject-example.component.css'
})
export class BehaviourSubjectExampleComponent {
  constructor() {
    const behaviourSubject$ = new BehaviorSubject(1);
    behaviourSubject$.next(10);
    behaviourSubject$.next(20);
    behaviourSubject$.next(50);

    behaviourSubject$.subscribe({
      next: (message) => console.log(message),
      error: (error) => console.log(error),
      complete: () => console.log(),
    });

    behaviourSubject$.subscribe({
      next: (message) => console.log(message),
      error: (error) => console.log(error),
      complete: () => console.log(),
    });

    behaviourSubject$.next(30);
  }
}
