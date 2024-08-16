import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TokenService} from "./token.service";
import {LOGIN_URL} from "../constans";
import {AuthTokenResDTO} from "../models/respose";
import {Store} from "@ngrx/store";
import {clearUser, loadUser} from "../store/actions/user.actions";
import {Router} from "@angular/router";

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private http: HttpClient,
	            private tokenService: TokenService,
	            private store: Store,
	            private router: Router) { }

	login(email: string, password: string) {
		return this.http.post(LOGIN_URL, {email, password}).pipe(
			res => {
				res.subscribe(
					{
						next: (response: AuthTokenResDTO) => {
							try {
								console.log(response)
								const user = this.tokenService.decodeToken(response.token);
								console.log("dispatching user", user);
								this.tokenService.saveToken(response.token);
								this.store.dispatch(loadUser({user}));
							} catch (error) {
								console.log(error);
							}
						},
						error: error => {
							console.error(error);
							//this.store.dispatch(clearUser());
						}
					}
				);
				return res;
			}
		);
	}

	logout() {
		this.store.dispatch(clearUser());
		this.router.navigate(['/login']);
	}


}
