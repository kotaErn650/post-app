import { Component } from '@angular/core';
import { UserTableComponent } from '../../../users/componets/user-table/user-table.component';

@Component({
  selector: 'app-user-page',
  imports: [UserTableComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {

}
