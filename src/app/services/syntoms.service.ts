import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GET_SYMPTOMS_URL} from "../constans/urlConstants";
import {Observable} from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class SyntomsService {

	constructor(private http: HttpClient) { }

	getSyntoms(): Observable<any> {
		return this.http.get(GET_SYMPTOMS_URL);
	}
}
