"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TutorialStructuralDirectiveComponent = /** @class */ (function () {
    function TutorialStructuralDirectiveComponent() {
        this.showLine1 = true;
        this.color = "green";
        this.colorList = ["Red", "Blue", "Green"];
    }
    TutorialStructuralDirectiveComponent = __decorate([
        core_1.Component({
            selector: 'my-tutorial-structural_directive',
            template: "\n    <div>    \n        <h1>This is lesson Structural Directives</h1>\n       \n        <p *ngIf=\"showLine1\">\n            Expression is false and ngIf is false.\n            This paragraph is not in the DOM.\n        </p>\n\n        <div [ngSwitch]=\"color\">\n            <p *ngSwitchCase=\"'red'\">This is color red ==> ngSwitch</p>\n            <p *ngSwitchCase=\"'blue'\">This is color blue ==> ngSwitch</p>\n            <p *ngSwitchCase=\"'green'\">This is color green ==> ngSwitch</p>\n            <p *ngSwitchDefault>Invalid color ==> ngSwitch</p>\n        </div>\n\n        <ul>\n            <li *ngFor=\"let item of colorList\">This is ngFor: {{item}}</li>\n        </ul>\n    </div>\n    "
        })
    ], TutorialStructuralDirectiveComponent);
    return TutorialStructuralDirectiveComponent;
}());
exports.TutorialStructuralDirectiveComponent = TutorialStructuralDirectiveComponent;
//# sourceMappingURL=tutorial.structural_directive.component.js.map