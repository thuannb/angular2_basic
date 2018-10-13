import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'my-app',
  templateUrl: "app/app.component.html",
  styleUrls: ["app/app.component.css"]
})
export class AppComponent {
  constructor(private loginService: LoginService) { }

  LogOut() {
    this.loginService.SetLogin(false);
  }
}