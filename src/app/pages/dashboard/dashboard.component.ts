import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <div>
      <h2 class="text-2xl font-bold mb-4">Hi {{username$ | async}},</h2>
      <h3>you are now logged in</h3>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  username$!: Observable<string>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.username$ = this.userService.username$;
  }
}