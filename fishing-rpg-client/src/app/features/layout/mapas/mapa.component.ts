import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./mapa.component.html', //Ta inline, quando tu for fazer o css e html, faz um templateUrl e importa
  styles: [`.mock { padding: 20px; font-size: 20px; text-align: center; }`]
})
export class MapaComponent {}
