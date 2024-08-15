import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {REGISTER_URL} from "../constans/urlConstants";
import {DoctorService} from "./doctor.service";

@Injectable({
	providedIn: 'root'
})
export class RegisterService {

	constructor(private http: HttpClient, private doctorService: DoctorService) { }

	registerUser(user: any) {
		return this.http.post(REGISTER_URL, user);
	}

}
