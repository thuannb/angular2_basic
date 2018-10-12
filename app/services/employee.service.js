"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeService = /** @class */ (function () {
    function EmployeeService() {
    }
    EmployeeService.prototype.GetList = function () {
        var employees = [
            { Id: 1, Name: "Nguyen Van Teo", Amount: 2000 },
            { Id: 2, Name: "Tran Thi No", Amount: 4000 },
            { Id: 3, Name: "Nguyen Chi Pheo", Amount: 5000 },
            { Id: 4, Name: "Luc Van Tien", Amount: 10000 }
        ];
        return employees;
    };
    EmployeeService.prototype.CalcSumAmount = function (employees) {
        var totalSum = 0;
        for (var item in employees) {
            console.log(item);
            totalSum += parseFloat(employees[item]["Amount"]);
        }
        return totalSum;
    };
    EmployeeService = __decorate([
        core_1.Injectable()
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map