import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './register.component.html',
  imports: [FormsModule, ReactiveFormsModule],
  standalone: true
})
export class RegisterComponent {
  username = '';
  senha = '';
  nickname = '';

  constructor(private http: HttpClient) {}

  criarJogador() {
    const payload = { username: this.username, senha: this.senha, nickname: this.nickname };
    this.http.post('http://localhost:3000/api/jogador/criar', payload).subscribe({
      next: (res) => console.log('Jogador criado:', res),
      error: (err) => console.error('Erro ao criar jogador:', err)
    });
  }
}