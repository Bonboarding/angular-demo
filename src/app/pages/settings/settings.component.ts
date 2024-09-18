import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="max-w-2xl mx-auto">
      <h2 class="text-2xl font-bold mb-6">User Settings</h2>
      <form (ngSubmit)="onSubmit()" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Name
          </label>
          <input 
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="name" 
            type="text" 
            placeholder="John Doe"
            [(ngModel)]="name"
            name="name">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input 
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="email" 
            type="email" 
            placeholder="john@example.com"
            [(ngModel)]="email"
            name="email">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
            Phone Number
          </label>
          <input 
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="phone" 
            type="tel" 
            placeholder="(123) 456-7890"
            [(ngModel)]="phone"
            name="phone">
        </div>
        <div class="mb-4">
          <label class="flex items-center">
            <input 
              type="checkbox" 
              class="form-checkbox h-5 w-5 text-blue-600"
              [(ngModel)]="emailCommunications"
              name="emailCommunications">
            <span class="ml-2 text-gray-700">Receive email communications</span>
          </label>
        </div>
        <div class="flex items-center justify-between">
          <button 
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            type="submit">
            Save Settings
          </button>
        </div>
      </form>
    </div>
  `
})
export class SettingsComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  emailCommunications: boolean = false;

  onSubmit() {
    console.log('Settings saved:', { name: this.name, email: this.email, phone: this.phone, emailCommunications: this.emailCommunications });
    // Here you would typically send this data to a backend service
  }
}