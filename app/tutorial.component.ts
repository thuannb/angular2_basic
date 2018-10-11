import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'my-tutorial',
    template: `
    <div>
        <h3>@Input()</h3>
        <p>This use @Input and pass value from Componet A to Component B, Child Component: {{name}}</p>
    </div>

    <div>
        {{nameOutput}}
        <button [disabled] = "voted" (click)="clickVote(true)">Agree</button>
        <button [disabled] = "voted" (click)="clickVote(false)">Disgree</button>
    </div>
    `
})
export class TutorialComponent {
    @Input() name: string = "";
    @Input() nameOutput: string = "";
    @Output() onVote = new EventEmitter<boolean>();

    public voted: boolean = false;

    clickVote(agree: boolean) {
        this.voted = true;
        //Output
        this.onVote.emit(agree);
    }

    setName(name:string){
        this.name = name;
    }
}