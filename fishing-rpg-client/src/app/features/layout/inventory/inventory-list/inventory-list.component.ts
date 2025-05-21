import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss'],
  imports: [CommonModule, HttpClientModule]
})
export class InventoryListComponent implements OnInit {
  inventario: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.carregarInventario();
    }

    carregarInventario() {
  const jogadorId = localStorage.getItem('jogadorId');
  if (!jogadorId) {
    console.error('Jogador não logado');
    return;
  }

  this.http.get<any[]>(`http://localhost:3000/api/jogador/${jogadorId}/inventario`)
    .subscribe({
      next: (data) => this.inventario = data,
      error: (err) => console.error('Erro ao carregar inventário:', err)
    });
}

  equiparItem(itemId: string) {
  const jogadorId = localStorage.getItem('jogadorId');
  this.http.post<any>('http://localhost:3000/api/jogador/equipar', {
    jogadorId,
    itemId
  }).subscribe({
    next: (res) => {
      alert(res.mensagem);
      this.carregarInventario()
    },
    error: (err) => {
      alert(err.error?.erro || 'Erro ao equipar item');
    }
  });
}
}

