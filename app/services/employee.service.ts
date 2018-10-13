import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {

    constructor(private _http: Http) {
    }

    private urlAPI: string = "http://5bc0169059c0e1001337f23b.mockapi.io/api/employees/";

    GetList(): Observable<any[]> {
        return this._http.get(this.urlAPI).map((respone: Response) => respone.json());
    }

    GetSingle(id: number): Observable<any> {
        return this._http.get(this.urlAPI + id).map((respone: Response) => respone.json());
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