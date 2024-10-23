import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hot',
  templateUrl: './hot.component.html',
  styleUrl: './hot.component.css'
})
export class HotComponent {
  first: string = 'first';
  second: string = 'second';

/* Obiekt obserwowalny nazywa sie gorącym, gdy emitowane dane sa tworzone poza samym obiektem obserwowalnym */

  constructor() {
    const value = Math.random();
      const coldObservable$ = new Observable(observer => {
        observer.next(value);
        observer.next(value);
        observer.complete();
      });

      /** Pierwszy subskrybent */
      coldObservable$.subscribe(data =>{
        console.log(`Pierwszy obserwator: ${data}`);
        this.first=`${data}`;
      });
      /** Drugi subskrybent */
      coldObservable$.subscribe(data =>{
        console.log(`Drugi obserwator: ${data}`);
        this.second=`${data}`;
      });
  }
}
