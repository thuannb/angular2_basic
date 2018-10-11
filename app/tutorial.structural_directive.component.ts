import { Component } from '@angular/core';
@Component({
    selector: 'my-tutorial-structural_directive',
    template: `
    <div>    
        <h1>This is lesson Structural Directives</h1>
       
        <p *ngIf="showLine1">
            Expression is false and ngIf is false.
            This paragraph is not in the DOM.
        </p>

        <div [ngSwitch]="color">
            <p *ngSwitchCase="'red'">This is color red ==> ngSwitch</p>
            <p *ngSwitchCase="'blue'">This is color blue ==> ngSwitch</p>
            <p *ngSwitchCase="'green'">This is color green ==> ngSwitch</p>
            <p *ngSwitchDefault>Invalid color ==> ngSwitch</p>
        </div>

        <ul>
            <li *ngFor="let item of colorList">This is ngFor: {{item}}</li>
        </ul>
    </div>
    `
})

export class TutorialStructuralDirectiveComponent {
    public showLine1: boolean = true;
    public color: string = "green";
    public colorList: string[] = ["Red", "Blue", "Green"];
}