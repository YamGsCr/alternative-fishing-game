import { NgModule } from "@angular/core";
import { MapaComponent } from "./mapa.component";
import { CommonModule } from "@angular/common";
import { MapaRoutingModule } from "./mapa-routing.module";

@NgModule({
    declarations: [MapaComponent],
    imports: [CommonModule, MapaRoutingModule]
})

export class MapaModule{}