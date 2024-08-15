import { Component } from '@angular/core';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
})
export class RegisterComponent {
    constructor() {}

    email!: string;

    password!: string;

    repeatPassword!: string;

    register() {
        let request = {
            email: this.email,
            password: this.password,
            repeatPassword: this.repeatPassword,
        };

        console.log(request);
    }
}
