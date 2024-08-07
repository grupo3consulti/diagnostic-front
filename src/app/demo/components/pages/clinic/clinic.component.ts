import { Component, OnInit } from '@angular/core';
import {MenuItem, Message, MessageService} from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ClinicService } from '../../../service/clinic.service';
import {ToastModule} from "primeng/toast";

@Component({
    selector: 'app-clinic',
    standalone: true,
    imports: [PanelMenuModule, ToastModule],
    templateUrl: './clinic.component.html',
    styleUrls: ['./clinic.component.scss']
})
export class ClinicComponent implements OnInit {
    panelMenuItems: MenuItem[] = [];
    clinics: any[] = [];
    doctors: any[] = [];
    allAppointments: any[] = [];
    appointmentsByDoctor: { [key: number]: any[] } = {};
    selectedDoctorId: number | null = null;
    expandedState: { [key: number]: boolean } = {};

    msgs: Message[] = [];

    constructor(private clinicService: ClinicService,private messageService: MessageService) {}

    ngOnInit(): void {
        this.loadClinicsAndDoctors();
    }

    loadClinicsAndDoctors(): void {
        this.clinicService.getClinics().subscribe(
            clinics => {
                this.clinics = clinics.filter(clinic => clinic.estado === 'Activo');
                this.loadDoctors();
            },
            error => {
                console.error('Error loading clinics', error);
            }
        );
    }

    loadDoctors(): void {
        this.clinicService.getDocs().subscribe(
            doctors => {
                this.doctors = doctors.filter(doctor => doctor.estado === 'Activo');
                this.loadAppointments();
            },
            error => {
                console.error('Error loading doctors', error);
            }
        );
    }

    loadAppointments(): void {
        this.clinicService.getAppointments().subscribe(
            appointments => {
                this.allAppointments = appointments;
                this.updateMenuItems();
            },
            error => {
                console.error('Error loading appointments', error);
            }
        );
    }

    updateMenuItems(): void {
        const currentExpandedState = { ...this.expandedState };

        this.panelMenuItems = this.clinics.map(clinic => ({
            label: clinic.nombre,
            expanded: currentExpandedState[clinic.id_institucion_medica] ?? true,
            items: [
                {
                    label: 'Detalles',
                    icon: 'pi pi-fw pi-info',
                    items: [
                        { label: `Address: ${clinic.dirección}`, icon: 'pi pi-fw pi-home' },
                        { label: `Phone: ${clinic.teléfono}`, icon: 'pi pi-fw pi-phone' },
                        { label: `Status: ${clinic.estado}`, icon: 'pi pi-fw pi-check-circle' }
                    ]
                },
                {
                    label: 'Médicos Disponibles',
                    icon: 'pi pi-fw pi-book',
                    items: this.getDoctorsForClinic(clinic.id_institucion_medica).map(doctor => ({
                        label: doctor.nombre,
                        icon: 'pi pi-fw pi-user',
                        expanded: currentExpandedState[doctor.id_medico] ?? true,
                        items: [
                            { label: `Especialidad: ${doctor.especialidad}`, icon: 'pi pi-fw pi-star' },
                            { label: `Email: ${doctor.email}`, icon: 'pi pi-fw pi-envelope' },
                            { label: `Phone: ${doctor.teléfono}`, icon: 'pi pi-fw pi-phone' },
                            { label: 'Citas Disponibles', icon: 'pi pi-fw pi-calendar' , items:
                                    [
                                        {
                                            label: 'Crear cita',
                                            icon: 'pi pi-fw pi-calendar-plus',
                                            command: () => this.crearAppointment()
                                        },
                                        ...this.getAppointmentsForDoctor(doctor.id_medico)
                                    ]
                            }
                        ]
                    }))
                }
            ]
        }));

        this.expandedState = { ...currentExpandedState };
    }

    getDoctorsForClinic(clinicId: number): any[] {
        return this.doctors.filter(doctor => doctor.institucion_medica_id === clinicId);
    }

    getAppointmentsForDoctor(doctorId: number): MenuItem[] {
        return this.allAppointments
            .filter(appointment => appointment.medico_id === doctorId)
            .map(appointment => ({
                label: `Fecha: ${new Date(appointment.fecha_hora).toLocaleString()}`,
                icon: 'pi pi-fw pi-calendar',
                items: [
                    ...(appointment.estado === 'Disponible' ? [
                        {
                            label: 'Agendar',
                            icon: 'pi pi-fw pi-calendar-plus',
                            command: () => this.scheduleAppointment(appointment)
                        }
                    ] : []),
                    {
                        label: 'Cancelar',
                        icon: 'pi pi-fw pi-calendar-minus',
                        command: () => this.cancelAppointment(appointment)
                    }
                ]
            }));
    }

    scheduleAppointment(appointment: any): void {
        console.log(`Intentando agendar la cita para: Fecha: ${new Date(appointment.fecha_hora).toLocaleString()} - Estado: ${appointment.estado ?? 'No Disponible'}`);
        this.showAlert('success','Exitó', 'Cita agendada con exito' );
    }

    cancelAppointment(appointment: any): void {
        this.showAlert('error','Exitó', 'Cita cancelada con exito' );
    }
    crearAppointment(): void {
        this.showAlert('info','Creación', 'Cita creada con exitó' );
    }

    showAlert(severity,summary,detail ) {
        this.messageService.add({ key: 'tst', severity: severity, summary: summary, detail: detail });
    }

}
