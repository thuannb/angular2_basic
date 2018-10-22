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
var employee_service_1 = require("./services/employee.service");
var router_1 = require("@angular/router");
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(employeeService, router, activatedRoute) {
        this.employeeService = employeeService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.employees = [];
        this.pages = [1, 2, 3, 4, 5];
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.pageCurrent = params['pageNo'] || 1;
            //alert('Current Page: ' + this.pageCurrent + ' and filter:' + params['filter']);
        });
        this.FillData();
        // this.totalSum = this.employeeList.CalcSumAmount(this.employees);
    };
    EmployeeComponent.prototype.Delete = function (id) {
        var _this = this;
        var confirmResult = confirm("Are you sure delete employee?");
        if (confirmResult) {
            this.employeeService.Delete(id).subscribe(function (respone) {
                _this.FillData();
            });
        }
    };
    EmployeeComponent.prototype.FillData = function () {
        var _this = this;
        this.employeeService.GetList().subscribe(function (respones) {
            _this.employees = respones;
            console.log(respones);
        }, function (error) {
            console.log(error);
        });
    };
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'employee-list',
            templateUrl: 'app/employee.component.html' //,
            // providers: [EmployeeService]//Dua ve module cho no load luon
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService,
            router_1.Router, router_1.ActivatedRoute])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map