import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-activities',
  templateUrl: './admin-activities.component.html'
  ,
  styles: [`
  button{
    float: right;
    margin: 2px;
  }
  mat-icon{
    margin: 5px;
  }
  `]
})
export class AdminActivitiesComponent implements OnInit {
  
  opened = true;
  amount: any;
  hide = true;
  value = "Clear me";
  x: any;

  isLoading: boolean = false;
  

  max = 100000;
  min = 1;
  id_ = 0;
  
  //Add variables
  CustID_: any;
  First_name_: any;
  Last_name_: any;
  Gender_: any;
  Age_: any;
  Phone_num_: any;
  Country_: any;
  Email_: any;
  Address_: any;
  NumCNI_: any;
  myDatePicker_: any;

  //Update and Delete Variables

  _Id: any;
  
  _CustID : any;
  _First_name: any;
  _Last_name: any;
  _Gender: any;
  _Age: any;
  _Phone_num: any;
  _Country: any;
  _Email: any;
  _Address: any;
  _NumCNI: any;
  _myDatePicker: any;

  items:any[] = [];
  items_y:any[] = [];
  _ID:any[] = [];


  constructor(private service : SharedServiceService, private _snackBar: MatSnackBar) { }

  testTime = () =>{
    
    
  }

  clearInputForCustomers = () => {
    this.First_name_ = "",
    this.Last_name_ = "",
    this.Gender_ ="",
    this.Age_ = "",
    this.Phone_num_ = "",
    this.Country_ = "",
    this.Email_ = "",
    this.Address_ = "",
    this.NumCNI_ = "",
    this.myDatePicker_ = ""
  }
  clearInputsUpdate = () => {
    this._Id = "",
    this._CustID = "",
    this._First_name = "",
    this._Last_name = "",
    this._Gender ="",
    this._Age = "",
    this._Phone_num = "",
    this._Country = "",
    this._Email = "",
    this._Address = "",
    this._NumCNI = "",
    this._myDatePicker = ""
  }
  getCustomers = () => {
    return this.service.getCustomers().subscribe(data => {
      this.items = data;
    });
  }
  Add_Customers = () => {
    var val = {
      Cust_ID : this.CustID_,
      First_name : this.First_name_,
      Last_Name : this.Last_name_,
      Gender : this.Gender_,
      Age : this.Age_,
      Phone_number : this.Phone_num_,
      Country : this.Country_,
      Email : this.Email_,
      Addresse : this.Address_,
      NumCNI : this.NumCNI_,
      DateOfBirth: this.myDatePicker_
    }
    this.service.addCustomers(val).subscribe(res =>{
      this.isLoading = true;
      this.openSnackBar(res.toString(), "OK");
      this.freshCustomers();
    });
    this.clearInputForCustomers();
    this.CustID_ = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }
  Update_Customers = () => {
    var val = {
      Id : this._Id, 
      Cust_ID : this._CustID,
      First_name : this._First_name,
      Last_Name : this._Last_name,
      Gender : this._Gender,
      Age : this._Age,
      Phone_number : this._Phone_num,
      Country : this._Country,
      Email : this._Email,
      Addresse : this._Address,
      NumCNI : this._NumCNI,
      DateOfBirth: this._myDatePicker
    }
    this.service.updateCustomers(val).subscribe(res => {
      this.clearInputsUpdate();
      this.openSnackBar(res.toString(), "OK");
      this.freshCustomers();  
    });
  }
  deleteCustomers = (item : any) => {
    this.service.deleteCustomers(item.Id).subscribe(data =>{
      this.openSnackBar(data.toString(), "OK");
      this.freshCustomers();
    });
  }
  //Open snack bar 
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  // Fill all text input by click only
  fillUpdateFilds = (x_y: any, a: any,b: any,c: any,d: any,e: any,f: any,g: any,h: any,i: any,j: any,k: any,) => {
    this._Id = x_y;
    this._CustID = a;
    this._First_name = b;
    this._Last_name = c;
    this._Gender = d;
    this._Age = e;
    this._Phone_num = f;
    this._Country = g;
    this._Email = h;
    this._Address = i;
    this._NumCNI = j;
    this._myDatePicker = k;
    return this.service.getCustomers().subscribe(data => {
      this.items_y = data;
      for(let x = 0; x < this.items_y.length; x++){
        this.items_y[x].Id = x_y;
        this.items_y[x].Cust_ID = a;
        this.items_y[x].First_name = b;
        this.items_y[x].Last_Name = c;
        this.items_y[x].Gender = d;
        this.items_y[x].Age = e;
        this.items_y[x].Phone_number = f;
        this.items_y[x].Country = g;
        this.items_y[x].Email = h;
        this.items_y[x].Addresse = i;
        this.items_y[x].NumCNI = j;
        this.items_y[x].DateOfBirth = k;
      }
    })
  }
  //refresh tables
  freshCustomers (){
    return this.service.getCustomers().subscribe(data => {
      this.items = data;
    });
  }
  ngOnInit(): void {
    this.CustID_ = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    this.freshCustomers();
  }

}
