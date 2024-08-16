export class ConsultationReq {
    usuario_id?: string;
    medico_id?: string;
    fecha_hora?: string;
    descripcion?: string;
    sintomas?: Sintomas[];
}

export class Sintomas {
    id_sintoma?: number;
    descripcion?: string;
}
