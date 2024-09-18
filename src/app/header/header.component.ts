import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <header class="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-blue-500">
      <div class="flex items-center">
        <h2 class="text-2xl font-bold text-gray-800">Dashboard</h2>
      </div>
      <div class="flex items-center">
        <div class="relative">
          <button class="flex items-center text-gray-600 focus:outline-none">
            <div class="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              {{(username$ | async)?.[0] || ''}}
            </div>
            <span class="ml-2">{{username$ | async}}</span>
          </button>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent implements OnInit {
  username$!: Observable<string>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.username$ = this.userService.username$;
  }
}