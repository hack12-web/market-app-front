import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-update-payment-dialog',
  templateUrl: './update-payment-dialog.component.html',
  styleUrls: ['./update-payment-dialog.component.css']
})
export class UpdatePaymentDialogComponent implements OnInit {

  constructor(private service : SharedServiceService) { }

  EmpID_ : any;
  CustID_ : any;
  Cust_name_ : any;
  TypePay_ : any;
  NumSTAND_ : any;
  amount : any;
  Date_ : any;

  b: any;
     c: any;
      d: any;
       e: any;
        f: any;
         g: any;
          h: any

  itemsX:any[] = [];

  getPayments = () =>{
    this.service.getPayment().subscribe(data =>{
      this.itemsX = data;
      console.log(this.itemsX);
    });
  }
  addPayment = ( ) => {
    
  }

  ngOnInit(): void {
    this.getPayments();

  }

}
