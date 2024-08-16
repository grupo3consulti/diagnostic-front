import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of, tap} from 'rxjs';
import {loadUser, clearUser} from '../actions/user.actions';
import {UserService} from "../../services/user.service";

@Injectable()
export class UserEffects {
	constructor(private actions$: Actions, private userService: UserService) {}

	storeUser$ = createEffect(() => this.actions$.pipe(ofType(loadUser),
		tap(action => {
			console.log("ingresando al efecto ")
			this.userService.saveUserInfo(action.user);
		})
	), {dispatch: false});

	clearUser$ = createEffect(() => this.actions$.pipe(ofType(clearUser),
		tap(() => {
			this.userService.clearUserInfo();
		})
	), {dispatch: false});

}
