import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [RouterModule, FormsModule]
})
export class LoginComponent {
  username = '';
  senha = '';

  constructor(private http: HttpClient, private router: Router) {}

  fazerLogin() {
  this.http.post<any>('http://localhost:3000/api/login', {
    username: this.username,
    senha: this.senha
  }).subscribe({
    next: (res) => {
      console.log('Login OK:', res);

      if (!res?.jogador?._id) {
        alert('Jogador inválido ou não encontrado.');
        return;
      }

      const jogador = res.jogador;

      // Persistir dados do jogador no localStorage
      localStorage.setItem('jogadorId', jogador._id);
      localStorage.setItem('nickname', jogador.nickname);
      localStorage.setItem('moedas', jogador.moedas?.toString() || '0');

      alert(`Bem-vindo, ${jogador.nickname}!`);
      this.router.navigate(['/jogo']);
    },
    error: (err) => {
      console.error('Erro no login:', err);
      alert(err.error?.erro || 'Erro ao fazer login');
    }
  });
}

}
