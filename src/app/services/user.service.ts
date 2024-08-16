import {Injectable} from '@angular/core';
import {JwtPayloadUser} from "../models";

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor() { }

	saveUserInfo(user: JwtPayloadUser): void {
		localStorage.setItem('role', user.rol);
		localStorage.setItem('id', user.id.toString());
		localStorage.setItem('nombre', user.nombre);
		localStorage.setItem('medicoId', user.medico_id?.toString());
	}

	clearUserInfo(): void {
		localStorage.removeItem('role');
		localStorage.removeItem('id');
		localStorage.removeItem('nombre');
		localStorage.removeItem('medicoId');
	}

}
