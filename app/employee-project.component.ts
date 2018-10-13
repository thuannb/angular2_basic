import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'employee-project-component',
    template: `
        <h3>This is employee project component</h3>
    `
})
export class EmployeeProjectComponent implements OnInit, OnDestroy {

    public parentID: number;
    public sub: Subscription;

    constructor(private router: Router, private activedRouter: ActivatedRoute) {

    }

    ngOnInit() {
        this.sub = this.activedRouter.parent.params.subscribe(para=>{
            this.parentID = para['id'];
            alert('Project child id:' + this.parentID)
        })
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}