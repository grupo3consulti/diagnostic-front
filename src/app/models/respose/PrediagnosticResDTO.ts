export interface PrediagnosticResDTO {
	prediagnostico: string;
	recomendaciones: string;
	medicosCercanosRecomendados: { medico: Medico }[];

}

export interface Institucion {
	coordenada_x: string;
	coordenada_y: string;
	direccion: string;
	estado: string;
	id_institucion_medica: number;
	nombre: string;
	telefono: string;
}

export interface Medico {
	email: string;
	especialidad: string;
	estado: string;
	id_medico: number;
	institucion: Institucion;
	nombre: string;
	telefono: string;
}