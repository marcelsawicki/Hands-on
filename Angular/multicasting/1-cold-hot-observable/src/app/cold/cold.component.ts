import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cold',
  templateUrl: './cold.component.html',
  styleUrl: './cold.component.css'
})
export class ColdComponent {
  first: string = 'first';
  second: string = 'second';
/* Obiekt obserwowalny typu Multicast to obiekt, który emituje wartosci wspodzielone przez subskrybentow */

/* Obiekt obserwowalny nazywa sie zimnym, gdy emitowane dane sa tworzone przez sam obiekt obserwowalny */

  constructor() {
      const coldObservable$ = new Observable(observer => {
        observer.next(Math.random());
        observer.next(Math.random());
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
