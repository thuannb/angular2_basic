"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TutorialAttributeDirectiveComponent = /** @class */ (function () {
    function TutorialAttributeDirectiveComponent() {
        this.cone = true;
        this.ctwo = true;
        this.fontStyle = "italic";
        this.fontSize = "4em";
    }
    TutorialAttributeDirectiveComponent.prototype.toggle = function () {
        this.cone = !this.cone;
        this.ctwo = !this.ctwo;
    };
    TutorialAttributeDirectiveComponent = __decorate([
        core_1.Component({
            selector: 'my-tutorial-attribute_directive',
            template: "\n    <div>    \n        <h1>This is lesson Attribute Directives</h1>\n        <p [ngClass]=\"{classOne:cone,classTwo:ctwo}\">This is attribute directive apply ngClass</p>\n        <button (click)=\"toggle()\">Toggle</button>\n\n        <p [ngStyle]=\"{'font-style':fontStyle, 'font-size':fontSize}\">This is attribute directive apply ngStyle</p>\n    </div>\n    ",
            styles: ["\n        .classOne{\n            color:red;\n        }\n        .classTwo{\n            background-color:yellow;\n        }\n    "]
        })
    ], TutorialAttributeDirectiveComponent);
    return TutorialAttributeDirectiveComponent;
}());
exports.TutorialAttributeDirectiveComponent = TutorialAttributeDirectiveComponent;
//# sourceMappingURL=tutorial.attribute_directive.component.js.map