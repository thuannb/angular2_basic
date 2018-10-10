"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TutorialTwoWayBindingComponent = /** @class */ (function () {
    function TutorialTwoWayBindingComponent() {
    }
    TutorialTwoWayBindingComponent = __decorate([
        core_1.Component({
            selector: 'my-tutorial-two_way_binding',
            template: "\n    <div>    \n        <h1>This is lesson Two Way Binding. Link Property Binding and Event Binding</h1>\n        <input type=\"text\" [(ngModel)] = \"fName\" />\n        <input type=\"text\" [(ngModel)] = \"lName\" />\n        <br/>\n        Full Name: {{fName}} {{lName}}\n    </div>\n    "
        })
    ], TutorialTwoWayBindingComponent);
    return TutorialTwoWayBindingComponent;
}());
exports.TutorialTwoWayBindingComponent = TutorialTwoWayBindingComponent;
//# sourceMappingURL=tutorial.twowaybinding.component.js.map