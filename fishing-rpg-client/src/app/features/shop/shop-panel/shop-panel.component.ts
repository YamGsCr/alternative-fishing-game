import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-panel',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './shop-panel.component.html',
  styleUrl: './shop-panel.component.scss'
})
export class ShopPanelComponent implements OnInit {
  itens: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/api/loja').subscribe({
      next: data => this.itens = data,
      error: err => console.error('Erro ao carregar itens da loja', err)
    });
  } 

  comprar(item: any) {
  const jogadorId = localStorage.getItem('jogadorId');
  const compra = {
    jogadorId: jogadorId,
    itemId: item.id,
    itemNome: item.nome,
    preco: item.preco,
    mundo: item.mundo
  };

  this.http.post<any>('http://localhost:3000/api/compras', compra).subscribe({
    next: (res) => {
      alert(res.mensagem || 'Compra realizada com sucesso!');

      // Atualiza o saldo local
      localStorage.setItem('moedas', res.novoSaldo?.toString() || '0');

      // Dispara evento para atualizar topo
      const evento = new CustomEvent('moedasAtualizadas');
      window.dispatchEvent(evento);
    },
    error: (err) => {
      const erroMsg = err.error?.error || 'Erro ao realizar compra';

      if (erroMsg.includes('Item já adquirido')) {
        alert('Você já comprou esse item.');
        }
      else if (erroMsg.includes('Saldo insuficiente')) {
        alert('Você não tem moedas suficientes.');
        } 
      else {
        alert(erroMsg);
      }
    }
    });
  } 
}
