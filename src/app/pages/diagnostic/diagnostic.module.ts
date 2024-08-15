import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiagnosticRoutingModule } from './diagnostic-routing.module';
import { DiagnosticComponent } from './diagnostic.component';


@NgModule({
  declarations: [
    DiagnosticComponent
  ],
  imports: [
    CommonModule,
    DiagnosticRoutingModule
  ]
})
export class DiagnosticModule { }
