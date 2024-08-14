import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Appointment} from "../models/Appointment";

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

    createAppointment(appointment: Appointment): Observable<Appointment>{
        return this.http.post<Appointment>(this.apiUrl + '/citas', appointment);
    }

    deleteAppointment(appointment: number): Observable<any> {
        return this.http.delete<any>(this.apiUrl + '/citas/'+ appointment);
    }

    updateAppointment(id: number, appointment: Appointment): Observable<any> {
        return this.http.put<any>(this.apiUrl + '/citas/'+ id, appointment);
    }

    getUsers(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl + '/usuarios');
    }

}
