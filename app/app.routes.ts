import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { EmployeeComponent } from './employee.component';
import { NotFoundComponent } from './notfound.component';

const routing: Routes = [
    { path: '', component: HomeComponent },
    // { path: '', redirectTo: 'employee', pathMatch: "full" },//vao trang chu tu dong chuyen sang trang con
    { path: 'employee', component: EmployeeComponent },
    { path: '**', component: NotFoundComponent }
]

export const appRoutes = RouterModule.forRoot(routing);