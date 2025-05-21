import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLogado = false;
  nickname = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
  this.verificarLogin();
  setInterval(() => this.verificarLogin(), 1000);
}

verificarLogin(): void {
    const jogadorId = localStorage.getItem('jogadorId');
    this.isLogado = !!jogadorId;
    this.nickname = localStorage.getItem('nickname') ?? '';
}

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
