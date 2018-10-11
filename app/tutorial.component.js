"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TutorialComponent = /** @class */ (function () {
    function TutorialComponent() {
        this._uppercase = "This is paragraph use Pipe-Uppercase";
        this._lowercase = "This is paragraph use Pipe-Lowercase";
        this.today = Date.now();
        this.percentA = 0.259;
        this.percentB = 1.3495;
        this.numberPI = 3.141592;
        this.numberE = 2.718281828459045;
        this.object = {
            foo: 'bar',
            baz: 'qux',
            nested: {
                xyz: 3,
                numbers: [1, 2, 3, 4, 5]
            }
        };
        this.collection = ['a', 'b', 'c', 'd'];
    }
    TutorialComponent = __decorate([
        core_1.Component({
            selector: 'my-tutorial',
            template: "\n    <a href='https://v2.angular.io/docs/ts/latest/api/#!?type=pipe'>Link Pipes</a>\n    <hr/>\n    <p>{{_uppercase | uppercase}}</p>\n    <p>{{_lowercase | lowercase}}</p>\n    <hr/>\n    (date:'dd/MM/yyyy')\n    <p>{{today | date:'dd/MM/yyyy'}}</p>\n    <hr/>\n    (percent)\n    <p>A: {{percentA | percent}}</p>\n    <p>B: {{percentB | percent:'4.3-5'}}</p>\n    <hr/>\n    (number)\n    <p>e (no formatting): {{numberE}}</p>\n    <p>e (3.1-5): {{numberE | number:'3.1-5'}}</p>\n    <p>pi (no formatting): {{numberPI}}</p>\n    <p>pi (3.5-5): {{numberPI | number:'3.5-5'}}</p>\n    \n    <hr/>\n    <p>Without JSON pipe:</p>\n    <pre>{{object}}</pre>\n    <p>With JSON pipe:</p>\n    <pre>{{object | json}}</pre>\n\n    <hr/>\n    (slice:1:3)\n    <ul>\n        <li *ngFor=\"let i of collection | slice:1:3\">{{i}}</li>\n    </ul>\n    \n    <hr/>\n    (Customize Pipe)\n    {{ 2 |  exponentialStrength:5}}\n    "
        })
    ], TutorialComponent);
    return TutorialComponent;
}());
exports.TutorialComponent = TutorialComponent;
//# sourceMappingURL=tutorial.component.js.map