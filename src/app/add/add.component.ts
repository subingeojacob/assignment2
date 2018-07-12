import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../intemployee/intemployee.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  name: string;
  address: string;
  gender: string;
  employeeArray: IEmployee [] = [];
  employee: IEmployee;

  constructor() { }

  ngOnInit() {
  }

  Submit() {

    const employee: IEmployee = {'name' : this.name, 'adress' : this.address, 'gender' : this.gender};

    this.employeeArray.push(employee);
    console.log(this.employeeArray);
   localStorage.setItem('employee', JSON.stringify(this.employeeArray));
  }
}
