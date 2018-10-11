import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <my-tutorial></my-tutorial>
  `,
  styles: ['h4 {color:blue;}']
})
export class AppComponent {
  public name: string = "XPRO-ERP Angular2";
}