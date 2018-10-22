import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'employee-list',
    templateUrl: 'app/employee.component.html'//,
    // providers: [EmployeeService]//Dua ve module cho no load luon
})
export class EmployeeComponent implements OnInit {
    public employees: any[] = [];
    public totalSum: number;
    public pages: number[] = [1, 2, 3, 4, 5];
    public pageCurrent: number;

    constructor(private employeeService: EmployeeService,
        private router: Router, private activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.pageCurrent = params['pageNo'] || 1;
            //alert('Current Page: ' + this.pageCurrent + ' and filter:' + params['filter']);
        })
        this.employeeService.GetList().subscribe((respones: any) => {
            this.employees = respones;
            console.log(respones);
        }, error => {
            console.log(error);
        });

        // this.totalSum = this.employeeList.CalcSumAmount(this.employees);
    }
}