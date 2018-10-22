import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { EmployeeComponent } from './employee.component';
import { NotFoundComponent } from './notfound.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeEditComponent } from './employee-edit.component';
import { EmployeeAddComponent } from './employee-add.component';
import { EmployeeOverviewComponent } from './employee-overview.component';
import { EmployeeProjectComponent } from './employee-project.component';
import { LoginComponent } from './login.component';
import { Component } from '@angular/core';
import { CheckLoginGuard } from './guards/check-login.guard';
import { CheckSaveFormGuard } from './guards/check-save-form.guard';

const routing: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    // { path: '', redirectTo: 'employee', pathMatch: "full" },//vao trang chu tu dong chuyen sang trang con
    { path: 'employee', component: EmployeeComponent },//, canActivate: [CheckLoginGuard]
    {
        path: 'employee-detail/:id',
        component: EmployeeDetailComponent, canDeactivate: [CheckSaveFormGuard],
        children: [
            //{ path: '', redirectTo: 'overview', pathMatch: "full" },
            { path: 'overview', component: EmployeeOverviewComponent },
            { path: 'projects', component: EmployeeProjectComponent }
        ]
    },
    { path: 'employee-edit/:id', component: EmployeeEditComponent },
    { path: 'employee-add', component: EmployeeAddComponent },
    { path: '**', component: NotFoundComponent }
]

export const appRoutes = RouterModule.forRoot(routing);