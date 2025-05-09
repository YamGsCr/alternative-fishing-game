import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="mock">[ Status do Jogador: Tenho que puxar do shared, depois vejo o que fazemos. ]</div>`,
  styles: [`.mock { padding: 20px; font-size: 20px; text-align: center; }`]
})
export class StatusComponent {}
