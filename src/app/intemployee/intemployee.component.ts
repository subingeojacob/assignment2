import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intemployee',
  templateUrl: './intemployee.component.html',
  styleUrls: ['./intemployee.component.css']
})
export class IntemployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
export interface IEmployee {
  name: string;
  adress: string;
  gender: string;
}
