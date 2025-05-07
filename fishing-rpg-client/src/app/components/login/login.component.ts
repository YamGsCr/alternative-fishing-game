import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [FormsModule, ReactiveFormsModule],
  standalone: true
})
export class LoginComponent {
  username = '';
  senha = '';

  constructor(private http: HttpClient) {}

  fazerLogin() {
    const payload = { username: this.username, senha: this.senha };
    this.http.post('http://localhost:3000/api/login', payload).subscribe({
      next: (res) => console.log('Login realizado:', res),
      error: (err) => console.error('Erro no login:', err)
    });
  }
}
