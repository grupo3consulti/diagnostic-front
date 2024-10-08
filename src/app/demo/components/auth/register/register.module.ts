import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RegisterRoutingModule} from './register-routing.module';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {PasswordModule} from 'primeng/password';
import {RegisterComponent} from './register.component';
import {DropdownModule} from "primeng/dropdown";
import {ClinicService} from "../../../../services/clinic.service";
import {InputSwitchModule} from "primeng/inputswitch";

@NgModule({
	imports: [
		CommonModule,
		RegisterRoutingModule,
		ButtonModule,
		CheckboxModule,
		InputTextModule,
		FormsModule,
		PasswordModule,
		DropdownModule,
		InputSwitchModule
	],
	providers: [ClinicService],
	declarations: [RegisterComponent]
})
export class RegisterModule {
}
