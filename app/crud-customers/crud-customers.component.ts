import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-customers',
  templateUrl:'./crud-customers.component.html',
  styles: [`
  button{
    float: right;
    margin: 3px;
  }
  mat-icon{
    margin: 5px;
  }

  `]
})
export class CrudCustomersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

}
