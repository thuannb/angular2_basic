"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var tutorial_component_1 = require("./tutorial.component");
var tutorial_event_binding_component_1 = require("./tutorial.event_binding.component");
var tutorial_twowaybinding_component_1 = require("./tutorial.twowaybinding.component");
var tutorial_structural_directive_component_1 = require("./tutorial.structural_directive.component");
var tutorial_attribute_directive_component_1 = require("./tutorial.attribute_directive.component");
var exponential_strength_pipe_1 = require("./exponential-strength.pipe");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [
                app_component_1.AppComponent,
                tutorial_component_1.TutorialComponent,
                tutorial_event_binding_component_1.TutorialEventBindingComponent,
                tutorial_twowaybinding_component_1.TutorialTwoWayBindingComponent,
                tutorial_structural_directive_component_1.TutorialStructuralDirectiveComponent,
                tutorial_attribute_directive_component_1.TutorialAttributeDirectiveComponent,
                exponential_strength_pipe_1.ExponentialStrengthPipe
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map