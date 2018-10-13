import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {EmployeeService} from './services/employee.service';

@Component({
    selector: 'home-component',
    templateUrl: 'app/employee-detail.component.html'
})
export class EmployeeDetailComponent implements OnInit, OnDestroy {

    public _id: number;
    public subscription: Subscription;
    public employee:any;
    constructor(private route: Router,
        private activedRoute: ActivatedRoute,
        private employeeService:EmployeeService) {
    }

    ngOnInit() {
        this.subscription = this.activedRoute.params.subscribe(parms => {
            this._id = parms['id'];
        });

       this.employeeService.GetSingle(this._id).subscribe((data)=>{
           this.employee = data;
       })
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}