import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GET_SEMAPHORE_URL} from "../constans/urlConstants";
import {Observable} from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class SemaphoreService {

	constructor(private http: HttpClient) { }

	getSemaphore(): Observable<any[]> {
		return this.http.get<any[]>(GET_SEMAPHORE_URL);
	}

}
