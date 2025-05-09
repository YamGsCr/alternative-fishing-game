import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FishingPanelComponent } from '../../features/fishing/fishing-panel/fishing-panel.component';
import { TopBarComponent } from '../../features/layout/top-bar/top-bar.component';
import { ShopPanelComponent } from '../../features/shop/shop-panel/shop-panel.component';

@Component({
  selector: 'tela-principal',
  templateUrl: './telaprincipal.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FishingPanelComponent,
    TopBarComponent,
    ShopPanelComponent
  ]
})
export class TelaPrincipalComponent {}
