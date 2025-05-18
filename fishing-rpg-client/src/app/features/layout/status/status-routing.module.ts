import { Component, NgModule } from "@angular/core";
import { StatusComponent } from "./status.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {path: '', component: StatusComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StatusRoutingModule{}