import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetModule, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl:'./admin-dashboard.component.html',
  styles: [`
  mat-sidenav-container{
    min-height: 300px;
    border-radius: 20px 20px 0px 0px;
  }
  mat-sidenav, mat-sidenav-content{
    padding: 16px;
  }
  mat-sidenav{
    background-color: white;
    width: auto;
    height: auto;
  }
  header .link_router{
    text-decoration: none;
  }
  button{
    margin-right: 16px;
  }
  .example-card {
    max-width: 400px;
  }

  .litle-bar{
    display: flex;
    justify-content: space-between;
    border-radius: 20px 20px 0px 0px;
  }
  .inside_bar{
    border-radius: 0px 0px 20px 20px;
  }
  `]
})
export class AdminDashboardComponent implements OnInit {
  opened = false;
  expression_one = true;
  expression_two = false;
  expression_three = false;
  expression_four = false;
  amount: any;
  element_one = "Element One";

  openPayement = () => {
    this.expression_three = true;
    this.expression_one = false;
    this.expression_two = false;
    this.expression_four = false;
    this.opened = false;
  }
  openEmployeeManage = () => {
    this.expression_two = true
    this.expression_one = false;
    this.expression_three = false;
    this.expression_four = false;
    this.opened = false;
  }
  openAdminActiv = () => {
    this.expression_one = true;
    this.expression_two = false;
    this.expression_three = false;
    this.expression_four = false;
    this.opened = false;
  }
  openAdminSettings = () => {
    this.expression_four = true;
    this.expression_one = false;
    this.expression_two = false;
    this.expression_three = false;
    this.opened = false;
  }

  openAdminDashboard = () => {
    this.route.navigateByUrl("/dashboard");
  }
  myControl = new FormControl();
  constructor(private dialog: MatDialogModule, private route: Router) { }

  ngOnInit(): void {
  }

}
