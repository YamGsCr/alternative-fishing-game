import { NgModule } from "@angular/core";
import { EnciclopediaComponent } from "./enciclopedia.component";
import { CommonModule } from "@angular/common";
import { EnciclopediaRoutingModule } from "./enciclopedia-routing.module";

@NgModule({
    declarations: [EnciclopediaComponent],
    imports: [CommonModule, EnciclopediaRoutingModule]
})
export class EnciclopediaModule{}