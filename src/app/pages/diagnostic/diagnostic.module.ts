import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DiagnosticRoutingModule} from './diagnostic-routing.module';
import {DiagnosticComponent} from './diagnostic.component';
import {MultiSelectModule} from "primeng/multiselect";
import {FormsModule} from "@angular/forms";
import {ButtonDirective, ButtonModule} from "primeng/button";
import {Ripple} from "primeng/ripple";
import {ProgressBarModule} from "primeng/progressbar";
import {DividerModule} from "primeng/divider";
import {MessageModule} from "primeng/message";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {DialogModule} from "primeng/dialog";


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
		DividerModule,
		MessageModule,
		ToastModule,
		DialogModule,
		ButtonModule
	], providers: [
		MessageService
	]
})
export class DiagnosticModule {
}
