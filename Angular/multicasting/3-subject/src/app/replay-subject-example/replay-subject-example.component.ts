import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject-example',
  templateUrl: './replay-subject-example.component.html',
  styleUrl: './replay-subject-example.component.css'
})
export class ReplaySubjectExampleComponent {
  constructor() {
    const replaySubject$ = new ReplaySubject();
    replaySubject$.next(10);
    replaySubject$.next(20);
    replaySubject$.next(50);

    replaySubject$.subscribe({
      next: (message) => console.log(message),
      error: (error) => console.log(error),
      complete: () => console.log(),
    });

    replaySubject$.subscribe({
      next: (message) => console.log(message),
      error: (error) => console.log(error),
      complete: () => console.log(),
    });

    replaySubject$.next(30);
  }
}
