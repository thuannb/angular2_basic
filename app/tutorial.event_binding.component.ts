import { Component, ViewChild, ElementRef } from '@angular/core';
@Component({
    selector: 'my-tutorial-event_binding',
    template: `
    <div>    
        <h1>This is lesson Event Binding</h1>
        <button (click)="OnClick1()">Click me 1</button>
        {{EventText}}
        
        <br/>
        <button (click)="OnClick2(txtTest.value)">Click me 2</button>
        <input type="text" #txtTest />
        <br/>
        
        <input #box
            (keyup.enter)="setFocus(box2)"/>
        <input #box2 />
    </div>
    `
})

export class TutorialEventBindingComponent {
    EventText: string = "";
    iCount: number = 0;
    @ViewChild('box2') myInput: ElementRef; 
    OnClick1() {
        this.iCount += 1;
        this.EventText = "Ban da click lan thu: " + this.iCount.toString();
    }

    OnClick2(value:any) {
        alert(value.toString());
    }

    setFocus() { 
        this.myInput.nativeElement.focus(); 
      } 
}