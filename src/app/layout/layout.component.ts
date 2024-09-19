import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import Bonboarding from 'bonboarding';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, AsyncPipe, RouterOutlet],
  template: `
    <div class="flex h-screen bg-gray-100">
      <app-sidebar></app-sidebar>
      <div class="flex-1 flex flex-col overflow-hidden">
        <app-header></app-header>
        <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div class="container mx-auto px-6 py-8">
            <router-outlet>
            </router-outlet>
          </div>
        </main>
      </div>
    </div>
  `
})
export class LayoutComponent implements OnInit {
  username$!: Observable<string>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.username$ = this.userService.username$;

    /*
     * Initialize Bonboarding
     *
     * Make sure to replace the API key with your own.
     * You can find your API key in the Bonboarding dashboard under Integration:
     * https://app.bonboarding.com/integration
     * 
     * Here you would typically real values after authenticating the user
     * and sending the correct data to Bonboarding.
     * 
     * For this example, we'll just use random values, except for the first name.
     * 
     * Learn more about passing user data to Bonboarding:
     * https://docs.bonboarding.com/docs/developers/how-to-pass-user-data/
     */
    Bonboarding.init('dqe4r9upoj');
    Bonboarding.identify({
      firstName: this.userService.getUsername(),
      uniqueID: Math.round(Math.random() * 100000).toString(),
      // Replace with real values
      lastName: 'Doe',
      email: 'angular@example.com',
      signUpDate: new Date().toISOString(),
    });
  }
}