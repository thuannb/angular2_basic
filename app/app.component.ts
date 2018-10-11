import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: "app/app.component.html",
  styleUrls: ["app/app.component.css"]
})
export class AppComponent {
  public cities: object[] = [{ Id: 1, Name: "Ha Noi" }, { Id: 2, Name: "Ho Chi Minh" }];
  onSubmit(value: any) {
    console.log(value);
  }
}