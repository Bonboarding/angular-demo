import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics',
  standalone: true,
  template: `
    <div>
      <h2 class="text-2xl font-bold mb-4">Statistics</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="bg-white p-4 rounded shadow">
          <h3 class="font-bold mb-2">Total Users</h3>
          <p class="text-3xl font-bold text-blue-500">1,234</p>
        </div>
        <div class="bg-white p-4 rounded shadow">
          <h3 class="font-bold mb-2">Active Sessions</h3>
          <p class="text-3xl font-bold text-green-500">567</p>
        </div>
        <div class="bg-white p-4 rounded shadow">
          <h3 class="font-bold mb-2">Revenue</h3>
          <p class="text-3xl font-bold text-purple-500">$89,012</p>
        </div>
      </div>
    </div>
  `
})
export class StatisticsComponent {}