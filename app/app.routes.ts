import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { EmployeeComponent } from './employee.component';
import { NotFoundComponent } from './notfound.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeOverviewComponent } from './employee-overview.component';
import { EmployeeProjectComponent } from './employee-project.component';
import { Component } from '@angular/core';

const routing: Routes = [
    { path: '', component: HomeComponent },
    // { path: '', redirectTo: 'employee', pathMatch: "full" },//vao trang chu tu dong chuyen sang trang con
    { path: 'employee', component: EmployeeComponent },
    {
        path: 'employee-detail/:id',
        component: EmployeeDetailComponent,
        children: [
            //{ path: '', redirectTo: 'overview', pathMatch: "full" },
            { path: 'overview', component: EmployeeOverviewComponent },
            { path: 'projects', component: EmployeeProjectComponent }
        ]
    },
    { path: '**', component: NotFoundComponent }
]

export const appRoutes = RouterModule.forRoot(routing);