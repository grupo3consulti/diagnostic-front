import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class ClinicService {
    private apiUrl = 'http://localhost:3000/diagnostic';

    constructor(private http: HttpClient) { }

    getClinics(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl + '/institucionesMedicas' );
    }

    getDocs(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl + '/medicos');
    }

    getAppointments(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl + '/citas');
    }
}
