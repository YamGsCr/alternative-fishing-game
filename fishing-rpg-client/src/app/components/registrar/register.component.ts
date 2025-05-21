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
  const payload = {
    username: this.username,
    senha: this.senha,
    nickname: this.nickname
  };

  this.http.post<any>('http://localhost:3000/api/jogador/criar', payload).subscribe({
    next: (res) => {
      alert(res.mensagem || 'Conta criada com sucesso!');
      // Se quiser redirecionar após criar:
      // this.router.navigate(['/login']);
    },
    error: (err) => {
      alert(err.error?.erro || 'Erro ao criar conta');
      console.error('Erro ao criar jogador:', err);
    }
  });
}
}