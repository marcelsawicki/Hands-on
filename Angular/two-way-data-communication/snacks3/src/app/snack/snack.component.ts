import { Component } from '@angular/core';
import { SnackListComponent } from '../snack-list/snack-list.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrl: './snack.component.css'
})
export class SnackComponent {
  pageTitle = 'Menu Options';
  listFilter = '';
}