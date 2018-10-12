import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';

@Component({
    selector: 'employee-list',
    templateUrl: 'app/employee.component.html'//,
    // providers: [EmployeeService]//Dua ve module cho no load luon
})
export class EmployeeComponent implements OnInit {
    public employees: any[] = [];
    public totalSum: number;
    constructor(private employeeService: EmployeeService) {

    }

    ngOnInit() {
        this.employeeService.GetList().subscribe((respones: any) => {
            this.employees = respones;
            console.log(respones);
        }, error => {
            console.log(error);
        });

        // this.totalSum = this.employeeList.CalcSumAmount(this.employees);
    }
}