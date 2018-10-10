import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <img [src]="image" />
  <my-tutorial></my-tutorial>
  <input type="text" [value] = "wellcome"/>
  `,
  styles: ['h4 {color:blue;}']
})
export class AppComponent {
  //One way binding (1 chieu tu Component/Module/Class to View)
  public name = 'Angular 2';
  
  //property binding
  public image = "https://picsum.photos/200";
  public wellcome = "Wellcome to Angular2";
}