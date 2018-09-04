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
    textcolor:string = 'green';
    colspan: number = 3 ;
    imgPath: string ="https://angular.io/assets/images/logos/angular/logo-nav@2x.png";
    classtouse: string = 'class1';
    showdetails: boolean = false;
    btntxt: string = "Show Details";
    buttonclick(): void {
        this.showdetails = !this.showdetails;
        this.btntxt = this.showdetails ==  true? "Hide Details": "Show Details";
    }
    empName(): string{
        return this.firstname + ' ' + this.LastNamme;
    }

   
}