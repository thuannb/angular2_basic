import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeeService } from './services/employee.service';

@Component({
    selector: 'employee-edit-component',
    templateUrl: 'app/employee-edit.component.html'
})
export class EmployeeEditComponent implements OnInit, OnDestroy {

    public _id: number;
    public subscription: Subscription;
    public employee: any;
    constructor(private route: Router,
        private activedRoute: ActivatedRoute,
        private employeeService: EmployeeService) {
    }

    ngOnInit() {
        this.subscription = this.activedRoute.params.subscribe(parms => {
            this._id = parms['id'];
        });

        this.employeeService.GetSingle(this._id).subscribe((data) => {
            this.employee = data;
            console.log(data);
        })
    }

    Save() {
        this.employeeService.Update(this._id, this.employee).subscribe(respone => {
            if (respone) {
                alert('update success!');
                this.GoToEmployee();
            }
        }, error=>{
            console.log(error);
        });
    }

    GoToEmployee() {
        this.route.navigate(['employee']);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}