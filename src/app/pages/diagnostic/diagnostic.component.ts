import {Component, HostListener, OnInit} from '@angular/core';
import {SyntomsService} from "../../services/syntoms.service";
import {map} from "rxjs/operators";
import {PrediagnosticService} from "../../services/prediagnostic.service";
import {JwtPayloadUser} from "../../models";
import {Observable, tap} from "rxjs";
import {selectUser} from "../../store/selectors/user.selectors";
import {Store} from "@ngrx/store";
import {SemaphoreService} from "../../services/semaphore.service";

@Component({
	selector: 'app-diagnostic',
	templateUrl: './diagnostic.component.html',
	styleUrl: './diagnostic.component.scss'
})
export class DiagnosticComponent implements OnInit {
	constructor(
		private syntomps: SyntomsService,
		private prediagnosticService: PrediagnosticService,
		private semaphoreService: SemaphoreService
	) {}

	semaphoreColor = {
		"verde": {"color": "#22c55e", "msg": "No hay alerta", "class": "card-verde"},
		"rojo": {"color": "#ef4444", "msg": "Alerta roja", "class": "card-rojo"}
	}

	semaphoreAlert = {}

	user = localStorage.getItem('nombre');
	semaforo$: Observable<any[]> = this.semaphoreService.getSemaphore();


	syntomps$ = this.syntomps.getSyntoms().pipe(
		map(syntoms => syntoms.map(syntom => {
			return {label: syntom.descripción, value: syntom.id_síntoma}
		}))
	);

	selectedSyntomps: any[] = [];
	labelSelectedSyntomps: string[] = ["Sin sintomas seleccionados"];

	textAreaMsg: string = '';

	coordinates: { x: number, y: number } = {x: 0, y: 0};
	latitude: number | undefined;
	longitude: number | undefined;
	errorMessage: string | undefined;
	selectedFile: File | null;

	onSyntompsChange(event: any) {
		this.labelSelectedSyntomps = this.selectedSyntomps.map(syntom => syntom.label);
	}

	sendInformation() {
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
				}
			}
		);


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
}
