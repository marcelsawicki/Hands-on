import { Component, Input, computed, inject, input } from '@angular/core';
import { SnackService } from '../snack.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-snack-list',
  templateUrl: './snack-list.component.html',
  styleUrl: './snack-list.component.css'
})
export class SnackListComponent {
  pageTitle = 'Snacks';

  filterCriteria = input.required({
    transform: (value: string) => value.toLocaleLowerCase(),
    alias: 'listCriteria'
  });

  snackService = inject(SnackService);

  snacks = this.snackService.snacks;
  filteredSnacks = computed(() =>
    this.snacks().filter(s => s.name.includes(this.filterCriteria())));
}
