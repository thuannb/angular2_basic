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
var TutorialComponent = /** @class */ (function () {
    function TutorialComponent() {
        this.name = "";
        this.nameOutput = "";
        this.onVote = new core_1.EventEmitter();
        this.voted = false;
    }
    TutorialComponent.prototype.clickVote = function (agree) {
        this.voted = true;
        //Output
        this.onVote.emit(agree);
    };
    TutorialComponent.prototype.setName = function (name) {
        this.name = name;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TutorialComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TutorialComponent.prototype, "nameOutput", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TutorialComponent.prototype, "onVote", void 0);
    TutorialComponent = __decorate([
        core_1.Component({
            selector: 'my-tutorial',
            template: "\n    <div>\n        <h3>@Input()</h3>\n        <p>This use @Input and pass value from Componet A to Component B, Child Component: {{name}}</p>\n    </div>\n\n    <div>\n        {{nameOutput}}\n        <button [disabled] = \"voted\" (click)=\"clickVote(true)\">Agree</button>\n        <button [disabled] = \"voted\" (click)=\"clickVote(false)\">Disgree</button>\n    </div>\n    "
        })
    ], TutorialComponent);
    return TutorialComponent;
}());
exports.TutorialComponent = TutorialComponent;
//# sourceMappingURL=tutorial.component.js.map