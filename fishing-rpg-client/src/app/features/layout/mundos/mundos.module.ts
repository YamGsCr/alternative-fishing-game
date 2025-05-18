import { NgModule } from "@angular/core";
import { MundosComponent } from "./mundos.component";
import { MundosRoutingModule } from "./mundos-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [MundosComponent],
    imports: [MundosRoutingModule, CommonModule]
})

export class MundosModule{}