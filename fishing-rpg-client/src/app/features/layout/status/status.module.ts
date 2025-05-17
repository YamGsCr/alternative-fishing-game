import { NgModule } from "@angular/core";
import { StatusComponent } from "./status.component";
import { CommonModule } from "@angular/common";
import { StatusRoutingModule } from "./status-routing.module";

@NgModule({
    declarations: [StatusComponent],
    imports:[CommonModule, StatusRoutingModule]
})

export class StatusModule{}