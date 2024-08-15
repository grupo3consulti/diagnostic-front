import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CREATE_PREDIAGNOSTIC_URL} from "../constans/urlConstants";

@Injectable({
	providedIn: 'root'
})
export class PrediagnosticService {

	constructor(private http: HttpClient) { }

	createPrediagnostic(prediagnostic: any) {
		return this.http.post(CREATE_PREDIAGNOSTIC_URL, prediagnostic);
	}
}
