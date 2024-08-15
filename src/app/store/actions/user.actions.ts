import { createAction, props } from '@ngrx/store';
import { JwtPayloadUser } from '../../models';

export const loadUser = createAction('[User] Load User', props<{ user: JwtPayloadUser }>());
export const clearUser = createAction('[User] Clear User');
