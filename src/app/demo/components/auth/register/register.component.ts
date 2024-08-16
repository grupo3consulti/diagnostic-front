import {Component} from '@angular/core';
import {ClinicService} from "../../../service/clinic.service";
import {map} from "rxjs/operators";
import {RegisterService} from "../../../../services/register.service";
import {DoctorService} from "../../../../services/doctor.service";

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html'
})
export class RegisterComponent {
	constructor(private clinicService: ClinicService, private registerService: RegisterService, private doctorService: DoctorService
	) {}

	clinics$ = this.clinicService.getClinics().pipe(
		map(clinics => clinics.map(clinic => {
			return {label: clinic.nombre, value: clinic.id_institucion_medica}
		}))
	);

	selectedClinic: any;
	email!: string;
	emailDoctor!: string;

	password!: string;

	repeatPassword!: string;

	isDoctor: boolean = false;

	rol: string = 'PACIENTE';

	nombre!: string;


	register() {
		console.log(this.isDoctor);
		if (this.isDoctor) {
			this.rol = 'MEDICO';
		} else {
			this.rol = 'PACIENTE';
		}
		let request = {
			nombre: this.nombre,
			email: this.email,
			contraseña: this.password,
			rol: this.rol,
			clinic: this.selectedClinic,
			emailDoctor: this.emailDoctor
		};
		console.log(request);
		this.registerService.registerUser(request).subscribe(
			{
				next: response => {
					console.log(response);
					if (request.rol === 'MEDICO') {
						const doctorReq = {
							nombre: request.nombre,
							email: request.emailDoctor,
							institucion_medica_id: request.clinic
						}
						console.log(
							"doctor Req",
							doctorReq
						);
						this.doctorService.createDoctor(doctorReq);
					}
				},
				error: error => {
					console.error(error);
				}
			}
		);
	}
}
