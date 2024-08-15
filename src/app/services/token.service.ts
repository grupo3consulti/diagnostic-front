import {Injectable} from '@angular/core';
import * as CryptoJS from 'crypto-js';
import {jwtDecode} from 'jwt-decode';
import {JwtPayloadUser} from "../models";


@Injectable({
	providedIn: 'root'
})
export class TokenService {

	constructor() { }

	private secretKey = '123456789';

	decryptToken(token: string) {
		try {
			if (!token) {
				return null;
			}
			const bytes = CryptoJS.AES.decrypt(this.secretKey, token);
			console.log("TokenService -> decryptToken -> bytes", bytes.toString());
			if (bytes.toString()) {
				return bytes.toString(CryptoJS.enc.Utf8);
			}
			return null;
		} catch (error) {
			console.error("Error al descencriptar el token", error.toString());
			return null;
		}
	};

	decodeToken(token: string): JwtPayloadUser | null {
		try {
			console.log("TokenService -> decodeToken -> token", token)
			if (token) {
				console.log("TokenService -> decodeToken -> jwtDecode<JwtPayloadUser>(decryptedToken)", jwtDecode<JwtPayloadUser>(token))
				return jwtDecode<JwtPayloadUser>(token);
			}
			return null;
		} catch (error) {
			console.error("Error al decodificar el token", error);
			return null;
		}

	};

	saveToken(token: string) {
		localStorage.setItem('token', token);
	}

	getToken(): string | null {
		return localStorage.getItem('token');
	}

}
