import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { EmployeeComponent } from './employee.component';
import { EmployeeService } from './services/employee.service';
import { HttpModule } from '@angular/http';
import { appRoutes } from './app.routes';
import { NotFoundComponent } from './notfound.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeOverviewComponent } from './employee-overview.component';
import { EmployeeProjectComponent } from './employee-project.component';
import { LoginComponent } from './login.component';
import { LoginService } from './services/login.service';
import { CheckLoginGuard } from './guards/check-login.guard';
import { CheckSaveFormGuard } from './guards/check-save-form.guard';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoutes
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    NotFoundComponent,
    EmployeeDetailComponent,
    EmployeeOverviewComponent,
    EmployeeProjectComponent,
    LoginComponent
  ],
  providers: [EmployeeService, LoginService, CheckLoginGuard, CheckSaveFormGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
