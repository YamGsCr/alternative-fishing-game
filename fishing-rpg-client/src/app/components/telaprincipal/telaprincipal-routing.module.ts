import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaComponent } from '../../features/layout/mapas/mapa.component';
import { MundosComponent } from '../../features/layout/mundos/mundos.component';
import { StatusComponent } from '../../features/layout/status/status.component';
import { EnciclopediaComponent } from '../../features/layout/enciclopedia/enciclopedia.component';
import { InventoryListComponent } from '../../features/layout/inventory/inventory-list/inventory-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'mapa', pathMatch: 'full' },
  { path: 'mapa', component: MapaComponent },
  { path: 'mundos', component: MundosComponent },
  { path: 'status', component: StatusComponent },
  { path: 'enciclopedia', component: EnciclopediaComponent },
  {path: 'inventário', component: InventoryListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelaPrincipalRoutingModule {}
