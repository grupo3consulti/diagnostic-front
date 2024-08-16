import {CanActivateFn} from '@angular/router';
import {inject, Inject} from "@angular/core";
import {UserService} from "../services/user.service";

export const authenticationGuard: CanActivateFn = (route, state) => {
	const userService = inject(UserService);
	if (userService.checkUserInfo()) {
		return true;
	} else if (state.url === '/auth/login' && !userService.checkUserInfo()) {
		return true;
	}
	return false;
};
