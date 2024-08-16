import {Component} from '@angular/core';
import {LayoutService} from 'src/app/layout/service/app.layout.service';
import {AuthService} from "../../../../services/auth.service";
import {tap} from "rxjs";
import {Message, MessageService} from "primeng/api";
import {Router} from "@angular/router";


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styles: [`
    :host ::ng-deep .pi-eye,
    :host ::ng-deep .pi-eye-slash {
      transform: scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
    }
	`],
	providers: [MessageService]
})
export class LoginComponent {

	valCheck: string[] = ['remember'];

	public password!: string;

	public email!: string;
	msgs: Message[] = [];

	constructor(public layoutService: LayoutService, private authService: AuthService, private msgService: MessageService
		, private router: Router) { }

	login() {
		this.authService.login(this.email, this.password).pipe(
			source => {
				source.subscribe(
					{
						next: () => {
							console.log('Sesion iniciada correctamente');
							this.msgService.add({
								key: 'tst',
								severity: 'success',
								summary: 'Exito',
								detail: 'Sesion iniciada correctamente'
							});
							this.router.navigate(['/']).then();
						},
						error: error => {
							console.error('Error', error);
							this.msgService.add({
								key: 'tst',
								severity: 'error', summary: 'Error', detail: error
							});
						}
					}
				);
				return source;
			}
		);
	}
}
