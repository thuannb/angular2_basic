import { Component } from '@angular/core';
@Component({
    selector: 'my-tutorial',
    template: `
    <h2>This is a Tutorial component in Angular2</h2>
    <h4 [class.redColor] = "applyClass">Apply property class</h4>
    
    <div [ngClass]="{'my-class': isClassVisible }">
        I am a div that wants to be styled
      </div>
      <button (click)="isClassVisible = !isClassVisible;">Toggle style</button>
      
    <div [style.background-color] = "getStyle()">
        Apply property style use method
    </div>
    
    <div [style.color] = "applyStyle?'red':'blue'">
        Apply property style use variable
    </div>
    `,
    styles: [`
        .redColor{
            color:red;
        }
        .my-class {
            background-color: yellow;
          }
    `]
})
export class TutorialComponent {
    public applyClass: false;
    public showStyle: false;
    public applyStyle: false;
    public isClassVisible: true;

    getStyle() {
        if (this.showStyle) {
            return "yellow";
        } else {
            return "green";
        }
    }
}