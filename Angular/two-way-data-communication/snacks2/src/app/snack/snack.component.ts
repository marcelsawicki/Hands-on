import { Component } from '@angular/core';
import { SnackListComponent } from '../snack-list/snack-list.component';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from "../filter/filter.component";

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrl: './snack.component.css',
  imports: [FilterComponent]
})
export class SnackComponent {
  pageTitle = 'Menu Options';
  listFilter = '';
}
