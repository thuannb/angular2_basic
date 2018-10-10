import{Component}from '@angular/core';
@Component({
    selector:'my-tutorial',
    template:`
    <h2>This is a Tutorial component in Angular2</h2>
    <h4>This is a Tutorial component in Angular2 with styles</h4>
    `,
    styles:['h4{color:red;}']
})
export class TutorialComponent{

}