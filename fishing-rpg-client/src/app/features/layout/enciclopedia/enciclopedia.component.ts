import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enciclopedia',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="mock">[ Enciclopédia de Peixes e Itens Coletados ]</div>`, //Ta inline, quando tu for fazer o css e html, faz um templateUrl e importa
  styles: [`.mock { padding: 20px; font-size: 20px; text-align: center; }`]
})
export class EnciclopediaComponent {}
