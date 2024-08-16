import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Appointment} from "../models/respose/Appointment";
import {ConsultationReq} from "../models/request/ConsultationReq";

@Injectable()
export class ClinicService {
    private apiUrl = 'https://diagnostic-iva4.onrender.com/diagnostic';

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

    getSintomas(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl + '/sintomas');
    }

    getConsultation(id: string): Observable<any> {
        return this.http.get<any>(this.apiUrl + '/consultas/details/'+ id);
    }

    createConsultation(consulta: ConsultationReq, archivo: File): Observable<any> {

        let formData = new FormData();
        formData.append("descripcion" , consulta.descripcion);
        formData.append("usuario_id",consulta.usuario_id);
        formData.append("medico_id",consulta.medico_id);
        formData.append("fecha_hora",consulta.fecha_hora);
        formData.append("cita_id",consulta.cita_id);
        formData.append("sintomas", JSON.stringify(consulta.sintomas));
        formData.append("filePath",archivo);

        return this.http.post<any>(this.apiUrl + '/consultas', formData);
    }

    updateConsultation(cita_id: number ,consulta: ConsultationReq): Observable<any> {


        return this.http.put<any>(this.apiUrl + '/consultas/'+ cita_id, consulta);
    }

}
