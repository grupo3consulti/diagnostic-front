export interface Consulta {
	id_consulta: number;
	cita_id: number;
	fecha_hora: Date;
	descripcion: string;
	documento: string;
	usuario_id: number;
	medico_id: number;
	estado: string;
	resultadoExamen: ResultadoExamen[];
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

export class ConsultaAuditoria {
	id_auditoria: number;
	consulta_id: number;
	documento_auditoria: string;
	prediagnostico: string;
	fecha_creacion: string;
	usr_creacion: string

}

export interface Consultation {
	usuario_id: number;
	consulta: Consulta;
	resultadoExamen: ResultadoExamen[];
	consultaSintomas: ConsultaSintoma[];
	consultaEnfermedad: ConsultaEnfermedad[];
	consultaAuditoria: ConsultaAuditoria[];
}

export interface Biometria {
	recuento_globulos_rojos: string;
	hemoglobina: string;
	hematocrito: string;
}

export interface ReaccionesFebrilesReaccionWidal {
	tifico_o: string;
	tifico_h: string;
}

export interface SerologiaReactanteFaseAguda {
	reacciones_febriles_reaccion_widal: ReaccionesFebrilesReaccionWidal;
}

export interface CitologiaMocoFecal {
	color: string;
	consistencia: string;
	ph: string;
}

export interface Coprologia {
	citologia_moco_fecal: CitologiaMocoFecal;
}

export interface InformeResultado {
	biometria?: Biometria;
	serologia_reactante_fase_aguda?: SerologiaReactanteFaseAguda;
	coprologia?: Coprologia;
}

export interface ResultadoExamenDetalle {
	Examen: string;
	Resultado: string;
	Unidades: string;
	ValoresReferencia: string;
}

export interface ResultadoExamen {
	id_resultado_examen: number;
	consulta_id: number;
	tipo_examen: string;
	resultado: string | ResultadoExamenParsed; // Se almacenará como JSON string, si deseas parsear, puedes usar
	// ResultadoExamenParsed
	estado: string;
	usr_creacion: string;
	usr_modificacion: string;
	fecha_creacion: string; // Puedes utilizar Date si necesitas manejar fechas como objetos Date
	fecha_modificacion: string; // Puedes utilizar Date si necesitas manejar fechas como objetos Date
}

export interface ResultadoExamenParsed {
	id_resultado_examen: number;
	consulta_id: number;
	tipo_examen: string;
	resultado: ResultadoExamenParsed; // Se almacenará como JSON string, si deseas parsear, puedes usar ResultadoExamenParsed
	estado: string;
	usr_creacion: string;
	usr_modificacion: string;
	fecha_creacion: string; // Puedes utilizar Date si necesitas manejar fechas como objetos Date
	fecha_modificacion: string; // Puedes utilizar Date si necesitas manejar fechas como objetos Date
}

export interface ResultadoExamenParsed {
	Resultados: ResultadoExamenDetalle[];
}

