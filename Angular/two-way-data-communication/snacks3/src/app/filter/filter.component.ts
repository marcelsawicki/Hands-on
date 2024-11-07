import { Component, model } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  filter = model.required({
    alias: 'filterCriteria'
  });
}
