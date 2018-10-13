import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { EmployeeDetailComponent } from '../employee-detail.component';

@Injectable()
export class CheckSaveFormGuard implements CanDeactivate<EmployeeDetailComponent> {
   
    canDeactivate(component:EmployeeDetailComponent) {
       alert('Bạn không thể rời khỏi trang này khi chưa lưu form')
       return false;
    }
}