import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {map, catchError, switchMap} from 'rxjs/operators';
import {TokenService} from '../../services/token.service';
import {loadUser, clearUser} from '../actions/user.actions';

@Injectable()
export class UserEffects {
	constructor(private actions$: Actions, private tokenService: TokenService) {}
}
