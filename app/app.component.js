"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tutorial_component_1 = require("./tutorial.component");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        //One way binding (1 chieu tu Component/Module/Class to View)
        this.name = 'Angular 2';
        this.persons = ["Mr A", "Mr B", "Mr C", "Mr D"];
        this.agreeNo = 0;
        this.disgreeNo = 0;
        // //property binding
        // public image = "https://picsum.photos/200";
        // public wellcome = "Wellcome to Angular2";
    }
    AppComponent.prototype.parentVote = function (agree) {
        if (agree)
            this.agreeNo++;
        else
            this.disgreeNo++;
    };
    AppComponent.prototype.changeName = function () {
        this.tutorialComponent.setName("I change name with ViewChild");
    };
    __decorate([
        core_1.ViewChild(tutorial_component_1.TutorialComponent),
        __metadata("design:type", tutorial_component_1.TutorialComponent)
    ], AppComponent.prototype, "tutorialComponent", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <h1>Hello {{name}}</h1>\n  <!--<img [src]=\"image\" />-->\n  <h3>This use @Input and pass value from Componet A to Component B</h3>\n  <h3>@Output(), EventEmitter. Output value from Child component to Parent component</h3>\n\n  <p>Input value:<input type=\"text\" #txtName (keyup) = \"0\"/></p>\n  <p> Output value:Agree number:{{agreeNo}}/ Disgree number:{{disgreeNo}}</p>\n  <p> @ViewChild change value from Component A to Component B</p>\n  <button (click)=\"changeName()\">Change name from Component A to Component B</button>\n\n  <my-tutorial *ngFor=\"let person of persons\" [nameOutput]=\"person\" [name]=\"txtName.value\"\n  (onVote) = \"parentVote($event)\">\n  </my-tutorial>\n\n  <!--<input type=\"text\" [value] = \"wellcome\"/>-->\n  <!--<my-tutorial-event_binding></my-tutorial-event_binding>-->\n  <!--<my-tutorial-two_way_binding></my-tutorial-two_way_binding>-->\n  <!--<my-tutorial-structural_directive></my-tutorial-structural_directive>-->\n  <!--<my-tutorial-attribute_directive></my-tutorial-attribute_directive>-->\n\n  \n  ",
            styles: ['h4 {color:blue;}']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map