import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ClinicComponent} from "./clinic.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', data: { breadcrumb: 'Listado de clinicas' }, component: ClinicComponent },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class ClinicRoutingModule { }
