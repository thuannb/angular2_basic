import { Component, ViewChild, ElementRef } from '@angular/core';
@Component({
    selector: 'my-tutorial-two_way_binding',
    template: `
    <div>    
        <h1>This is lesson Two Way Binding. Link Property Binding and Event Binding</h1>
        <input type="text" [(ngModel)] = "fName" />
        <input type="text" [(ngModel)] = "lName" />
        <br/>
        Full Name: {{fName}} {{lName}}
    </div>
    `
})

export class TutorialTwoWayBindingComponent {
    
}