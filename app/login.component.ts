import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login-component',
    templateUrl: 'app/login.component.html'
})
export class LoginComponent {
    constructor(private router: Router,
        private loginService: LoginService) {

    }

    CheckLogin(value: any) {
        console.log(value);
        if (value.txtUserName == "admin" && value.txtPassword == "123") {
            this.loginService.SetLogin(true);
            this.router.navigate(['']);
        }
    }
}