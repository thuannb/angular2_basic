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
var TutorialEventBindingComponent = /** @class */ (function () {
    function TutorialEventBindingComponent() {
        this.EventText = "";
        this.iCount = 0;
    }
    TutorialEventBindingComponent.prototype.OnClick1 = function () {
        this.iCount += 1;
        this.EventText = "Ban da click lan thu: " + this.iCount.toString();
    };
    TutorialEventBindingComponent.prototype.OnClick2 = function (value) {
        alert(value.toString());
    };
    TutorialEventBindingComponent.prototype.setFocus = function () {
        this.myInput.nativeElement.focus();
    };
    __decorate([
        core_1.ViewChild('box2'),
        __metadata("design:type", core_1.ElementRef)
    ], TutorialEventBindingComponent.prototype, "myInput", void 0);
    TutorialEventBindingComponent = __decorate([
        core_1.Component({
            selector: 'my-tutorial-event_binding',
            template: "\n    <div>    \n        <h1>This is lesson Event Binding</h1>\n        <button (click)=\"OnClick1()\">Click me 1</button>\n        {{EventText}}\n        \n        <br/>\n        <button (click)=\"OnClick2(txtTest.value)\">Click me 2</button>\n        <input type=\"text\" #txtTest />\n        <br/>\n        \n        <input #box\n            (keyup.enter)=\"setFocus(box2)\"/>\n        <input #box2 />\n    </div>\n    "
        })
    ], TutorialEventBindingComponent);
    return TutorialEventBindingComponent;
}());
exports.TutorialEventBindingComponent = TutorialEventBindingComponent;
//# sourceMappingURL=tutorial.event_binding.component.js.map