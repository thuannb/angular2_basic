import { Injectable } from '@angular/core';
@Injectable()
export class EmployeeService {
    GetList(): any[] {
        let employees: any[] = [
            { Id: 1, Name: "Nguyen Van Teo", Amount: 2000 },
            { Id: 2, Name: "Tran Thi No", Amount: 4000 },
            { Id: 3, Name: "Nguyen Chi Pheo", Amount: 5000 },
            { Id: 4, Name: "Luc Van Tien", Amount: 10000 }
        ]
        return employees;
    }

    CalcSumAmount(employees: any[]): number {
        let totalSum: number = 0;
        
        for (const item in employees) {
            console.log(item);
            totalSum += parseFloat(employees[item]["Amount"]);
        }
        return totalSum;
    }
}