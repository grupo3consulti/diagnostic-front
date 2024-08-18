import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CREATE_PREDIAGNOSTIC_URL} from "../constans/urlConstants";
import {Observable} from "rxjs";
import {PrediagnosticResDTO} from "../models/respose";

@Injectable({
	providedIn: 'root'
})
export class PrediagnosticService {

	constructor(private http: HttpClient) { }

	createPrediagnostic(prediagnostic: any): Observable<PrediagnosticResDTO> {
		return this.http.post<PrediagnosticResDTO>(CREATE_PREDIAGNOSTIC_URL, prediagnostic);
	}
}
