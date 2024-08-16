import {Component, HostListener, OnInit} from '@angular/core';
import {SyntomsService} from "../../services/syntoms.service";
import {map} from "rxjs/operators";
import {PrediagnosticService} from "../../services/prediagnostic.service";
import {JwtPayloadUser} from "../../models";
import {Observable, tap} from "rxjs";
import {selectUser} from "../../store/selectors/user.selectors";
import {Store} from "@ngrx/store";
import {SemaphoreService} from "../../services/semaphore.service";
import {UserService} from "../../services/user.service";
import {MessageService} from "primeng/api";
import {PrediagnosticResDTO} from "../../models/respose";
import {Router} from "@angular/router";

@Component({
	selector: 'app-diagnostic',
	templateUrl: './diagnostic.component.html',
	styleUrl: './diagnostic.component.scss'
})
export class DiagnosticComponent implements OnInit {
	constructor(
		private syntomps: SyntomsService,
		private prediagnosticService: PrediagnosticService,
		private semaphoreService: SemaphoreService,
		private userService: UserService,
		private msgService: MessageService,
		private router: Router
	) {}

	public semaphoreColor = {
		"verde": {"color": "#22c55e", "msg": "No hay alerta", "class": "card-verde"},
		"rojo": {"color": "#ef4444", "msg": "Alerta roja", "class": "card-rojo"}
	}


	user = localStorage.getItem('nombre');
	semaforo$: Observable<any[]> = this.semaphoreService.getSemaphore().pipe(
		map(semaphore => (
			semaphore.filter(semaphore => semaphore.enfermedad != null && semaphore["color"] != null && semaphore.cantidad != null)
		))
	);


	syntomps$ = this.syntomps.getSyntoms().pipe(
		map(syntoms => syntoms.map(syntom => {
			return {label: syntom.descripcion, value: syntom.id_sintoma}
		}))
	);

	loading: boolean = false;

	selectedSyntomps: any[] = [];
	labelSelectedSyntomps: string[] = ["Sin sintomas seleccionados"];

	textAreaMsg: string = '';

	coordinates: { x: number, y: number } = {x: 0, y: 0};
	latitude: number | undefined;
	longitude: number | undefined;
	errorMessage: string | undefined;
	selectedFile: File | null;
	prediagnosticResult: PrediagnosticResDTO;
	visible: boolean = true;
	scheduleButton: boolean = false;

	onSyntompsChange(event: any) {
		this.labelSelectedSyntomps = this.selectedSyntomps.map(syntom => syntom.label);
	}

	sendInformation() {
		this.loading = true;

		if (this.userService.checkUserInfo()) {
			console.log("sintomas seleccionados", this.selectedSyntomps)
			const formData = new FormData();
			formData.append('sintomas', JSON.stringify(this.selectedSyntomps.map(syntom => syntom.label)));
			formData.append('nombre', this.user);
			formData.append('x', this.coordinates.x.toString());
			formData.append('y', this.coordinates.y.toString());
			formData.append('filePath', this.selectedFile);
			console.log("formData", formData);

			this.prediagnosticService.createPrediagnostic(formData).subscribe(
				{
					next: value => {
						console.log("value", value);
						this.prediagnosticResult = value;
						this.visible = true;
						this.loading = false;

					},
					error: error => {
						console.error("error", error);
						this.prediagnosticResult = {
							prediagnostico: "No se pudo realizar el prediagnostico",
							recomendaciones: "Error al crear prediagnostico",
							medicosCercanosRecomendados: []
						};
						this.scheduleButton = true;
						this.loading = false;
					}
				}
			);
		} else {
			this.msgService.add({
				key: 'tst',
				severity: 'warn',
				summary: 'Inicie sesión',
				detail: 'Debe iniciar sesión para realizar un prediagnostico'
			});
			this.loading = false;

		}


	}

	ngOnInit(): void {
		this.getLocation();
	}

	getLocation(): void {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					this.latitude = position.coords.latitude;
					this.longitude = position.coords.longitude;
					this.coordinates = {x: this.latitude, y: this.longitude};
					console.log("coordinates", this.coordinates);
				},
				(error) => {
					this.errorMessage = `Error Code = ${error.code} - ${error.message}`;
					console.error(this.errorMessage);
				}
			);
		} else {
			this.errorMessage = "Geolocation is not supported by this browser.";
			console.error(this.errorMessage);
		}
	}

	onFileSelected(event: any) {
		this.selectedFile = event.target.files[0];
	}

	onAcceptModal() {
		this.visible = false;
		this.router.navigate(['/pages/clinic']);
	}

}
