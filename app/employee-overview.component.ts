import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'employee-overview-component',
    template: `
        <h3>This is employee overview component</h3>
    `
})
export class EmployeeOverviewComponent {
    public parentID: number;
    public sub: Subscription;

    constructor(private router: Router, private activedRouter: ActivatedRoute) {

    }

    ngOnInit() {
        this.sub = this.activedRouter.parent.params.subscribe(para => {
            this.parentID = para['id'];
            alert('Overview child id:' + this.parentID)
        })
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}