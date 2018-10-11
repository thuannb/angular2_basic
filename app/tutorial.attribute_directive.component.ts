import { Component } from '@angular/core';
@Component({
    selector: 'my-tutorial-attribute_directive',
    template: `
    <div>    
        <h1>This is lesson Attribute Directives</h1>
        <p [ngClass]="{classOne:cone,classTwo:ctwo}">This is attribute directive apply ngClass</p>
        <button (click)="toggle()">Toggle</button>

        <p [ngStyle]="{'font-style':fontStyle, 'font-size':fontSize}">This is attribute directive apply ngStyle</p>
    </div>
    `,
    styles: [`
        .classOne{
            color:red;
        }
        .classTwo{
            background-color:yellow;
        }
    `]
})

export class TutorialAttributeDirectiveComponent {
    public cone: boolean = true;
    public ctwo: boolean = true;

    public fontStyle:string="italic";
    public fontSize:string="4em";

    toggle() {
        this.cone = !this.cone;
        this.ctwo = !this.ctwo;
    }
}