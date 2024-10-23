import { Component } from '@angular/core';
import { fromEvent, map, Observable } from 'rxjs';

@Component({
  selector: 'app-mouse-event',
  templateUrl: './mouse-event.component.html',
  styleUrl: './mouse-event.component.css'
})
export class MouseEventComponent {
  constructor() { 
    const hotObservable$:Observable<Event> = fromEvent(document, 'click');
    hotObservable$
    .pipe(
      map((event:Event) => event as MouseEvent)
    )
    .subscribe((data: MouseEvent) =>{
      console.log(`Pierwszy subskrybent: [${data.clientX}, ${data.clientY}]`);
      return data;
    });

    hotObservable$
    .pipe(
      map((event:Event) => event as MouseEvent)
    )
    .subscribe((data: MouseEvent) =>{
      console.log(`Drugi subskrybent: [${data.clientX}, ${data.clientY}]`);
      return data;
    });
  }
}
