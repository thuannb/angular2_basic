import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from './services/employee.service';

@Component({
    selector: 'employee-add-component',
    templateUrl: 'app/employee-add.component.html'
})
export class EmployeeAddComponent implements OnInit{

    public employee: any;

    constructor(private route: Router,
        private activedRoute: ActivatedRoute,
        private employeeService: EmployeeService) {
    }

    ngOnInit() {
        this.employee={};
    }

    Save() {
        this.employeeService.Add(this.employee).subscribe(respone => {
            if (respone) {
                alert('Add success!');
                this.GoToEmployee();
            }
        }, error=>{
            console.log(error);
        });
    }

    GoToEmployee() {
        this.route.navigate(['employee']);
    }
    
}