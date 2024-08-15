export interface JwtPayloadUser {
	id: number;
	nombre: string;
	email: string;
	rol: string;
	medico_id?: number;
}
