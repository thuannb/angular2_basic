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
var router_1 = require("@angular/router");
var EmployeeProjectComponent = /** @class */ (function () {
    function EmployeeProjectComponent(router, activedRouter) {
        this.router = router;
        this.activedRouter = activedRouter;
    }
    EmployeeProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activedRouter.parent.params.subscribe(function (para) {
            _this.parentID = para['id'];
            alert('Project child id:' + _this.parentID);
        });
    };
    EmployeeProjectComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    EmployeeProjectComponent = __decorate([
        core_1.Component({
            selector: 'employee-project-component',
            template: "\n        <h3>This is employee project component</h3>\n    "
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
    ], EmployeeProjectComponent);
    return EmployeeProjectComponent;
}());
exports.EmployeeProjectComponent = EmployeeProjectComponent;
//# sourceMappingURL=employee-project.component.js.map