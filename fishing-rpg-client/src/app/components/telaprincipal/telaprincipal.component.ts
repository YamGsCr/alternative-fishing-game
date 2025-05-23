import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { FishingPanelComponent } from '../../features/fishing/fishing-panel/fishing-panel.component';
import { TopBarComponent } from '../../features/layout/top-bar/top-bar.component';
import { ShopPanelComponent } from '../../features/shop/shop-panel/shop-panel.component';
import { InventoryListComponent } from '../../features/layout/inventory/inventory-list/inventory-list.component';

@Component({
  selector: 'tela-principal',
  templateUrl: './telaprincipal.component.html',
  standalone: true,
  imports: [
    NgOptimizedImage,
    CommonModule,
    RouterModule,
    FishingPanelComponent,
    TopBarComponent,
    ShopPanelComponent,
    InventoryListComponent,

  ],
})
export class TelaPrincipalComponent {}
