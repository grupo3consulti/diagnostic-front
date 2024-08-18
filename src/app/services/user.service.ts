import {Injectable} from '@angular/core';
import {JwtPayloadUser} from "../models";
import {HttpClient} from "@angular/common/http";
import {GET_USER_BY_ID_URL} from "../constans/urlConstants";
import {Observable} from "rxjs";
import {User} from "../models/respose/User";

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(private http: HttpClient) { }

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

	checkUserInfo(): boolean {
		return !!localStorage.getItem('role') && !!localStorage.getItem('id') && !!localStorage.getItem('nombre');
	}

	getUserById(id: number): Observable<User> {
		return this.http.get<User>(GET_USER_BY_ID_URL + id);
	}

}
