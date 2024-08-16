import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DiagnosticRoutingModule} from './diagnostic-routing.module';
import {DiagnosticComponent} from './diagnostic.component';
import {MultiSelectModule} from "primeng/multiselect";
import {FormsModule} from "@angular/forms";
import {ButtonDirective} from "primeng/button";
import {Ripple} from "primeng/ripple";
import {ProgressBarModule} from "primeng/progressbar";
import {DividerModule} from "primeng/divider";


@NgModule({
	declarations: [
		DiagnosticComponent
	],
	imports: [
		CommonModule,
		DiagnosticRoutingModule,
		MultiSelectModule,
		FormsModule,
		ButtonDirective,
		Ripple,
		ProgressBarModule,
		DividerModule
	]
})
export class DiagnosticModule {
}
