import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {REGISTER_DOCTOR_URL} from "../constans/urlConstants";

@Injectable({
	providedIn: 'root'
})
export class DoctorService {

	constructor(private http: HttpClient) { }

	createDoctor(doctor: any) {
		this.http.post(REGISTER_DOCTOR_URL, doctor).subscribe();
	}
}
