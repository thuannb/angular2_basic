import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector:'home-component',
    template:`
        <h2>This is home component</h2>
        <button class="btn btn-success" (click)="GoToEmployee()">Go to employee use: Navigate</button>
    `
})
export class HomeComponent{
    constructor(private route: Router){

    }
    GoToEmployee(){
        this.route.navigate(['employee']);
    }
}