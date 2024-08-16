import {createReducer, on } from "@ngrx/store";
import {loadUser, clearUser} from "../actions/user.actions";
import {JwtPayloadUser} from "../../models";

export interface UserState {
    user: JwtPayloadUser | null;
}

export const initialState: UserState = {user: null};

export const userReducer = createReducer(
    initialState,
    on(loadUser, (state, {user}) => ({...state, user})),
    on(clearUser, state => ({...state, user: null})));
