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
var employee_service_1 = require("./services/employee.service");
var EmployeeEditComponent = /** @class */ (function () {
    function EmployeeEditComponent(route, activedRoute, employeeService) {
        this.route = route;
        this.activedRoute = activedRoute;
        this.employeeService = employeeService;
    }
    EmployeeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activedRoute.params.subscribe(function (parms) {
            _this._id = parms['id'];
        });
        this.employeeService.GetSingle(this._id).subscribe(function (data) {
            _this.employee = data;
            console.log(data);
        });
    };
    EmployeeEditComponent.prototype.Save = function () {
        var _this = this;
        this.employeeService.Update(this._id, this.employee).subscribe(function (respone) {
            if (respone) {
                alert('update success!');
                _this.GoToEmployee();
            }
        }, function (error) {
            console.log(error);
        });
    };
    EmployeeEditComponent.prototype.GoToEmployee = function () {
        this.route.navigate(['employee']);
    };
    EmployeeEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    EmployeeEditComponent = __decorate([
        core_1.Component({
            selector: 'employee-edit-component',
            templateUrl: 'app/employee-edit.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            employee_service_1.EmployeeService])
    ], EmployeeEditComponent);
    return EmployeeEditComponent;
}());
exports.EmployeeEditComponent = EmployeeEditComponent;
//# sourceMappingURL=employee-edit.component.js.map