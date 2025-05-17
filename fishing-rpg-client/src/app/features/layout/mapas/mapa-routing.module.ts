import { Component, NgModule } from "@angular/core";
import { MapaComponent } from "./mapa.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {path: '', component: MapaComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MapaRoutingModule{}