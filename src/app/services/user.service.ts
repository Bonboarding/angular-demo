import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usernameSubject = new BehaviorSubject<string>(localStorage.getItem('username') || '');
  public username$ = this.usernameSubject.asObservable();

  setUsername(username: string) {
    localStorage.setItem('username', username);
    this.usernameSubject.next(username);
  }

  getUsername(): string {
    return this.usernameSubject.value;
  }

  logout() {
    localStorage.removeItem('username');
    this.usernameSubject.next('');
  }

  isLoggedIn(): boolean {
    return !!this.getUsername();
  }
}