import { Component } from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template: `
    <a href='https://v2.angular.io/docs/ts/latest/api/#!?type=pipe'>Link Pipes</a>
    <hr/>
    <p>{{_uppercase | uppercase}}</p>
    <p>{{_lowercase | lowercase}}</p>
    <hr/>
    (date:'dd/MM/yyyy')
    <p>{{today | date:'dd/MM/yyyy'}}</p>
    <hr/>
    (percent)
    <p>A: {{percentA | percent}}</p>
    <p>B: {{percentB | percent:'4.3-5'}}</p>
    <hr/>
    (number)
    <p>e (no formatting): {{numberE}}</p>
    <p>e (3.1-5): {{numberE | number:'3.1-5'}}</p>
    <p>pi (no formatting): {{numberPI}}</p>
    <p>pi (3.5-5): {{numberPI | number:'3.5-5'}}</p>
    
    <hr/>
    <p>Without JSON pipe:</p>
    <pre>{{object}}</pre>
    <p>With JSON pipe:</p>
    <pre>{{object | json}}</pre>

    <hr/>
    (slice:1:3)
    <ul>
        <li *ngFor="let i of collection | slice:1:3">{{i}}</li>
    </ul>
    
    <hr/>
    (Customize Pipe)
    {{ 2 |  exponentialStrength:5}}
    `
})
export class TutorialComponent {
    public _uppercase: string = "This is paragraph use Pipe-Uppercase";
    public _lowercase: string = "This is paragraph use Pipe-Lowercase";
    public today = Date.now();

    public percentA: number = 0.259;
    public percentB: number = 1.3495;

    public numberPI: number = 3.141592;
    public numberE: number = 2.718281828459045;

    public object: Object = {
        foo: 'bar',
        baz: 'qux',
        nested: {
            xyz: 3,
            numbers: [1, 2, 3, 4, 5]
        }
    };

    public collection: string[] = ['a', 'b', 'c', 'd'];
}