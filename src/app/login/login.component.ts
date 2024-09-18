import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
        <div class="flex justify-center mb-4">
          <img src="/logo-light.png" alt="Logo" class="h-16">
        </div>
        <h2 class="text-2xl font-bold text-center text-gray-700 mb-8">Login</h2>
        <form (ngSubmit)="onSubmit()">
          <div class="mb-4">
            <input type="text" [(ngModel)]="username" name="username" placeholder="Username" 
                   class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300" />
          </div>
          <div class="mb-4">
            <input type="password" [(ngModel)]="password" name="password" placeholder="Password" 
                   class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300" />
          </div>
          <div class="mb-4">
            <button type="submit" class="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
          </div>
        </form>
      </div>
    </div>
  `
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    if (this.userService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

  onSubmit() {
    // Here you would typically handle authentication
    // For this example, we'll just set the username
    const username = this.username;
    this.userService.setUsername(username);
    this.router.navigate(['/dashboard']);
  }
}