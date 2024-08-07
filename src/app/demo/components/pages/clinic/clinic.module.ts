import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import {ClinicRoutingModule} from "./clinic-routing.module";
import {PanelMenuModule} from "primeng/panelmenu";
import {ClinicService} from "../../../service/clinic.service";
import {MessageService} from "primeng/api";

@NgModule({
    imports: [
        CommonModule,
        ClinicRoutingModule,
        InputTextModule
    ],
    declarations: [],
    providers: [ClinicService,MessageService]
})
export class ClinicModule { }
