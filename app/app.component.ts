import { Component, ViewChild } from '@angular/core';
import { TutorialComponent } from './tutorial.component';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <!--<img [src]="image" />-->
  <h3>This use @Input and pass value from Componet A to Component B</h3>
  <h3>@Output(), EventEmitter. Output value from Child component to Parent component</h3>

  <p>Input value:<input type="text" #txtName (keyup) = "0"/></p>
  <p> Output value:Agree number:{{agreeNo}}/ Disgree number:{{disgreeNo}}</p>
  <p> @ViewChild change value from Component A to Component B</p>
  <button (click)="changeName()">Change name from Component A to Component B</button>

  <my-tutorial *ngFor="let person of persons" [nameOutput]="person" [name]="txtName.value"
  (onVote) = "parentVote($event)">
  </my-tutorial>

  <!--<input type="text" [value] = "wellcome"/>-->
  <!--<my-tutorial-event_binding></my-tutorial-event_binding>-->
  <!--<my-tutorial-two_way_binding></my-tutorial-two_way_binding>-->
  <!--<my-tutorial-structural_directive></my-tutorial-structural_directive>-->
  <!--<my-tutorial-attribute_directive></my-tutorial-attribute_directive>-->

  
  `,
  styles: ['h4 {color:blue;}']
})
export class AppComponent {
  //One way binding (1 chieu tu Component/Module/Class to View)

  @ViewChild(TutorialComponent) 
  private tutorialComponent: TutorialComponent;

  public name = 'Angular 2';
  public persons: string[] = ["Mr A", "Mr B", "Mr C", "Mr D"];
  public agreeNo: number = 0;
  public disgreeNo: number = 0;

  parentVote(agree: boolean) {
    if (agree) this.agreeNo++;
    else this.disgreeNo++;
  }

  changeName() {
    this.tutorialComponent.setName("I change name with ViewChild");
  }
  // //property binding
  // public image = "https://picsum.photos/200";
  // public wellcome = "Wellcome to Angular2";
}