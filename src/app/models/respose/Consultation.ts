export interface Consulta {
    id_consulta: number;
    cita_id: number;
    fecha_hora: Date;
    descripcion: string;
    documento: string;
    usuario_id: number;
    medico_id: number;
    estado: string;
    usr_creacion: string;
    usr_modificacion: string;
    fecha_creacion: Date;
    fecha_modificacion: Date;
}

export interface ResultadoExamen {
    id_resultado_examen: number;
    consulta_id: number;
    tipo_examen: string;
    resultado: JSON;
    estado: string;
    usr_creacion: string;
    usr_modificacion: string;
    fecha_creacion: Date;
    fecha_modificacion: Date;
}

export interface ConsultaSintoma {
    consulta_id: number;
    sintoma_id: number;
    estado: string;
    usr_creacion: string;
    usr_modificacion: string | null;
    fecha_creacion: Date;
    fecha_modificacion: Date;
}

export interface ConsultaEnfermedad {
    consulta_id: number;
    enfermedad_id: number;
    estado: string;
    usr_creacion: string;
    usr_modificacion: string | null;
    fecha_creacion: Date;
    fecha_modificacion: Date;
}

export interface Consultation {
    consulta: Consulta;
    resultadoExamen: ResultadoExamen[];
    consultaSintomas: ConsultaSintoma[];
    consultaEnfermedad: ConsultaEnfermedad[];
}
