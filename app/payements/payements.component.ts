import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-payements',
  templateUrl:'./payements.component.html'
  ,
  styles: [`
  button{
    float: right;
  }
  `]
})
export class PayementsComponent implements OnInit {
 
  id_payment: any;
  id_payrall: any;


  //Payment Varialbles
  amount: any;
  EmpID_: any;
  CustID_:any;
  Cust_name_:any;
  TypePay_: any;
  NumSTAND_: any;
  Date_:any;

  //Payrall Variables
  _EmpID: any;
  _Emp_name: any;
  _Total_days: any;
  _Salary: any;
  _Day_works: any;
  _Date: any;

  itemsX:any[] = [];
  items:any[] = [];

  inputPayrall: any[] = [];
  inputPayment: any[] = [];

  cust_ids: any[] = [];

  constructor(private service: SharedServiceService, private _snackBar: MatSnackBar, private dialog: MatDialog) { }

  clearInputPayrall = () =>{
    this.id_payrall = "";
    this._EmpID = "";
    this._Emp_name = "";
    this._Total_days = "";
    this._Salary = "";
    this._Day_works = "";
    this._Date = "";
  }
  FillPayrallInputFilds = (a: any, b: any, c: any, d: any, e: any, f: any, g: any) =>{
    this.id_payrall = a;
    this._EmpID = b;
    this._Emp_name = c;
    this._Total_days = d;
    this._Salary = e;
    this._Day_works = f;
    this._Date = g;

    this.service.getPayralls().subscribe(data =>{
      this.inputPayrall = data;
      for(let i = 0; i < this.inputPayrall.length; i++)
      {
        this.inputPayrall[i].Id = a;
        this.inputPayrall[i].Emp_ID = b;
        this.inputPayrall[i].Emp_name = c;
        this.inputPayrall[i].Total_days = d;
        this.inputPayrall[i].Salary = e;
        this.inputPayrall[i].Day_workd = f;
        this.inputPayrall[i].DateOfpayrall = g;
      }
    });
  }
  clearInputPayment = () =>{
    this.id_payment = "";
    this.amount = "";
    this.EmpID_ = "";
    this.CustID_ = "";
    this.Cust_name_ = "";
    this.TypePay_ = "";
    this.NumSTAND_ = "";
    this.Date_ = "";
  }
  //I use Only CUST ID For This Arrays
  getCust = () =>{
    return this.service.getCustomers().subscribe(data =>{
      this.cust_ids = data;
    });
  }
  // Get Payralls
  getPayralls = () =>{
    return this.service.getPayralls().subscribe(data =>{
      this.items = data;
    });
  }
  addPayrall = () =>{
    var val = {
      Emp_ID : this._EmpID,
      Emp_name : this._Emp_name,
      Total_days : this._Total_days,
      Salary : this._Salary,
      Day_works : this._Day_works,
      DateOfpayrall : this._Date
    }
    this.service.addPayralls(val).subscribe(res =>{
      this.openSnackBar(res.toString(), "OK");
      this.getPayralls();
      this.clearInputPayrall();
    });
  }
  updatePayrall = () =>{
    var val = {
      Id : this.id_payrall,
      Emp_ID : this._EmpID,
      Emp_name : this._Emp_name,
      Total_days : this._Total_days,
      Salary : this._Salary,
      Day_works : this._Day_works,
      DateOfpayrall : this._Date
    }
    this.service.updatePayralls(val).subscribe(res =>{
      this.openSnackBar(res.toString(), "OK");
      this.getPayralls();
      this.clearInputPayrall();
    });
  }
  deletePayrall = (item : any) => {
    this.service.deletePayralls(item.Id).subscribe(data =>{
      this.openSnackBar(data.toString(), "OK");
      this.getPayralls();
    });
  }
  getPayment = () =>{
    return this.service.getPayment().subscribe(data =>{
      this.itemsX = data;
    });
  }
  addPayment = () =>{
    var val = {
      Fina_ID : this.EmpID_,
      Cust_ID : this.CustID_,
      Cust_name : this.Cust_name_,
      Type_pay : this.TypePay_,
      Num_Stand : this.NumSTAND_,
      Amount_pay : this.amount,
      DateOfPay : this.Date_
    }
    this.service.addPayment(val).subscribe(res =>{
      this.openSnackBar(res.toString(), "OK");
        this.getPayment();
        this.clearInputPayment();
    });   
}
updatePayment = () =>{
  var val = {
    Id : this.id_payment,
    Fina_ID : this.EmpID_,
    Cust_ID : this.CustID_,
    Cust_name : this.Cust_name_,
    Type_pay : this.TypePay_,
    Num_Stand : this.NumSTAND_,
    Amount_pay : this.amount,
    DateOfPay : this.Date_
  }
  this.service.updatePayment(val).subscribe(res =>{
    this.openSnackBar(res.toString(), "OK");
    this.getPayment();
    this.clearInputPayment();
  })
}
deletePayment = (item : any) => {
  this.service.deletePayment(item.Id).subscribe(data =>{
    this.openSnackBar(data.toString(), "OK");
    this.getPayment();
  });
}
FillupdatePayment = (a: any, b: any, c: any, d: any, e:any, f: any, g: any, h: any) =>{
  //this.dialog.open(UpdatePaymentDialogComponent);
  this.id_payment = a;
  this.EmpID_ = b;
  this.CustID_ = c;
  this.Cust_name_ = d;
  this.TypePay_ = e;
  this.NumSTAND_ = f;
  this.amount = g;
  this.Date_ = h;

  this.service.getPayment().subscribe(data =>{
    this.inputPayment = data;
    for(let x = 0; x < this.inputPayment.length; x++){
      this.inputPayment[x].Id = a;
      this.inputPayment[x].Fina_ID = b;
      this.inputPayment[x].Cust_ID = c;
      this.inputPayment[x].Cust_name = d;
      this.inputPayment[x].Type_pay = e;
      this.inputPayment[x].Num_Stand = f;
      this.inputPayment[x].Amount_pay = g;
      this.inputPayment[x].DateOfPay = h;
    }
  });
}
openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action);
}
  ngOnInit(): void {
    this.getPayralls();
    this.getPayment();
    this.getCust();
  }

}
