import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../intemployee/intemployee.component';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  name: string;
  address: string;
  gender: string;
  employeeArray: IEmployee;

  constructor() { }

  ngOnInit() {
    this.employeeArray = JSON.parse(localStorage.getItem('employee'));
    console.log(this.employeeArray);
  }

}
