import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h2 class="text-2xl font-bold mb-4">Users</h2>
      <table class="min-w-full bg-white">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">ID</th>
            <th class="py-2 px-4 border-b">Name</th>
            <th class="py-2 px-4 border-b">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let user of users">
            <td class="py-2 px-4 border-b">{{user.id}}</td>
            <td class="py-2 px-4 border-b">{{user.name}}</td>
            <td class="py-2 px-4 border-b">{{user.email}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})
export class UsersComponent {
  users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
  ];
}