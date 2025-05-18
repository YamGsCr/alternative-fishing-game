import { Component, NgModule } from "@angular/core";
import { MundosComponent } from "./mundos.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {path: '', component: MundosComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MundosRoutingModule{}