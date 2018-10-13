import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { EmployeeComponent } from './employee.component';
import { EmployeeService } from './services/employee.service';
import { HttpModule } from '@angular/http';
import { appRoutes } from './app.routes';
import {NotFoundComponent} from './notfound.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeOverviewComponent } from './employee-overview.component';
import { EmployeeProjectComponent } from './employee-project.component';

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
    EmployeeProjectComponent
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
