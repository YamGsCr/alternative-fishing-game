import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/registrar/register.component';
import { TelaPrincipalComponent } from './components/telaprincipal/telaprincipal.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegisterComponent },
  { path: 'jogo', component: TelaPrincipalComponent,
    children: [
      {
        path: 'mapa',
        loadComponent: () => import('./features/layout/mapas/mapa.component').then(m => m.MapaComponent)
      },
      {
        path: 'mundos',
        loadComponent: () => import('./features/layout/mundos/mundos.component').then(m => m.MundosComponent)
      },
      {
        path: 'status',
        loadComponent: () => import('./features/layout/status/status.component').then(m => m.StatusComponent)
      },
      {
        path: 'enciclopedia',
        loadComponent: () => import('./features/layout/enciclopedia/enciclopedia.component').then(m => m.EnciclopediaComponent)
      },
      {
        path: 'inventário',
        loadComponent: () => import('./features/layout/inventory/inventory-list/inventory-list.component').then(m => m.InventoryListComponent)
      },
      { path: '', redirectTo: 'mapa', pathMatch: 'full' }
    ]
   },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
