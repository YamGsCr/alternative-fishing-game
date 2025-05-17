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
    nomeItem: item.nome,
    preco: item.preco,
    mundo: item.mundo
  };

  this.http.post('http://localhost:3000/api/compras', compra).subscribe({
    next: () => alert(`Comprou: ${item.nome}`),
    error: () => alert('Erro ao comprar item')
  });
}


}
