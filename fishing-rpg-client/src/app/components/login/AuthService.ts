import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AuthService {
  get jogadorId(): string | null {
    return localStorage.getItem('jogadorId');
  }
  get nickname(): string | null {
    return localStorage.getItem('nickname');
  }
  logout() {
    localStorage.clear();
  }
}
