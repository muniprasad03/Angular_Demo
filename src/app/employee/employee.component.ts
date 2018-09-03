import {Component } from '@angular/core';

@Component({
    selector: 'employee',
    templateUrl: 'app/employee/employee.component.html',
    styles: ['h1{color: red;}']
})

export class EmployeeComponent {
    firstname : string = 'Prasad';
    LastNamme: string= 'Muni';
    salary:number =10000;
    department: string ='software';
    empName(): string{
        return this.firstname + ' ' + this.LastNamme;
    }
}