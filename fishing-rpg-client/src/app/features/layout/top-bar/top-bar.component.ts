import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'top-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  nickname = '';
  moedas = 0;

  ngOnInit(): void {
    this.nickname = localStorage.getItem('nickname') ?? 'Pescador Anônimo';
    this.moedas = parseInt(localStorage.getItem('moedas') || '0', 10);

    window.addEventListener('moedasAtualizadas', () => {
      this.moedas = parseInt(localStorage.getItem('moedas') || '0', 10);
    });
  }
}
