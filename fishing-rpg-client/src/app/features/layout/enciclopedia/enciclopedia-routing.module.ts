import { Component, NgModule } from "@angular/core";
import { EnciclopediaComponent } from "./enciclopedia.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {path: '', component: EnciclopediaComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EnciclopediaRoutingModule{}