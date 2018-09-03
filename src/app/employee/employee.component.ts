import {Component } from '@angular/core';

@Component({
    selector: 'employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.components.css']
})

export class EmployeeComponent {
    firstname : string = 'Prasad';
    LastNamme: string= 'muni';
    salary:number =10000;
    department: string ='software';
    empName(): string{
        return this.firstname + ' ' + this.LastNamme;
    }
}