import { Injectable, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class SharedServiceService implements OnInit {
  readonly APIUrl = "http://localhost:1047/api";

  constructor( private http: HttpClient) { }

  // Receptionist Issues
  getReceptionist():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Reception');
  }
  addReceptionist(val: any){
    return this.http.post(this.APIUrl+'/Reception', val); 
  }
  deleteReceptionist(val: any){
    return this.http.delete(this.APIUrl+'/Reception/'+ val);
  }
  updateReceptionist(val: any){
    return this.http.put(this.APIUrl+'/Reception', val);
  }
  // End Receptionist issues
  // Finace issues
  getFinance():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Finance');
  }
  addFinance(val: any){
    return this.http.post(this.APIUrl+'/Finance', val); 
  }
  deleteFinance(val: any){
    return this.http.delete(this.APIUrl+'/Finance/'+ val);
  }
  updateFinance(val: any){
    return this.http.put(this.APIUrl+'/Finance', val);
  }
  // End Finance issues

  // Customers issues
  getCustomers():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Customer');
  }
  addCustomers(val: any){
    return this.http.post(this.APIUrl+'/Customer', val); 
  }
  deleteCustomers(val: any){
    return this.http.delete(this.APIUrl+'/Customer/'+ val);
  }
  updateCustomers(val: any){
    return this.http.put(this.APIUrl+'/Customer', val);
  }
  //End Customer issues

  //Admin
  getAdmin():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/admin');
  }
  //=====================
  getPayment():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/payment');
  } 
  addPayment(val: any){
    return this.http.post(this.APIUrl+'/payment', val); 
  }
  deletePayment(val: any){
    return this.http.delete(this.APIUrl+'/payment/'+ val);
  }
  updatePayment(val: any){
    return this.http.put(this.APIUrl+'/payment', val);
  }
  //=====================

  // Payralls issues
  getPayralls():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/payralls');
  } 
  addPayralls(val: any){
    return this.http.post(this.APIUrl+'/payralls', val); 
  }
  deletePayralls(val: any){
    return this.http.delete(this.APIUrl+'/payralls/'+ val);
  }
  updatePayralls(val: any){
    return this.http.put(this.APIUrl+'/payralls', val);
  }
  // End Payralls
  ngOnInit(): void {
    this.getCustomers();
    this.getPayment();
    this.getPayralls();
  }
}
