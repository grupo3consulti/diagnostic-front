import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";

export const authenticationInterceptor: HttpInterceptorFn = (req, next) => {
	const token = localStorage.getItem('token');
	if (token) {
		req.headers.set('Authorization', `Bearer ${token}`);
	}
	return next(req).pipe(
		catchError((error: HttpErrorResponse) => {
			if (error.status === 401) {
				console.error('Solicitud no autorizada - posiblemente token inválido o expirado.');
			}
			return throwError(() => error);
		})
	);
};
