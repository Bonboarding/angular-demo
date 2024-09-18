import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="h-full flex flex-col w-64 bg-gray-800">
      <div class="flex items-center justify-center h-16 shadow-md">
        <h1 class="flex justify-center">
          <span class="sr-only">Bonboarding Integration Demo</span>
          <img src="/logo-dark.png" alt="Logo" class="h-12">
        </h1>
      </div>
      <ul class="flex-grow flex flex-col py-4">
        <li *ngFor="let item of menuItems">
          <a [routerLink]="item.route" routerLinkActive="bg-gray-700" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-white">
            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <i class="{{item.icon}}"></i>
            </span>
            <span class="text-sm font-medium">{{item.name}}</span>
          </a>
        </li>
      </ul>
      <div class="mt-auto mb-4 mx-4 p-4">
        <button (click)="logout()" class="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">
          Logout
        </button>
      </div>
    </div>
  `
})
export class SidebarComponent {
  menuItems = [
    { name: 'Dashboard', icon: 'fas fa-home', route: '/dashboard' },
    { name: 'Statistics', icon: 'fas fa-chart-bar', route: '/statistics' },
    { name: 'Users', icon: 'fas fa-users', route: '/users' },
    { name: 'Settings', icon: 'fas fa-cog', route: '/settings' }
  ];

  constructor(private userService: UserService, private router: Router) {}

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}