import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reception-dashboard',
  template: `
  <mat-toolbar color="primary" class="toolbar">
    <div>
      <span>RECEPTIONIST PANEL</span>
    </div>
    <div>
      <button mat-button (click)="o_d()">
        <mat-icon>logout</mat-icon>
      </button>
    </div>
  </mat-toolbar>
  <div class="container">
  <mat-toolbar color="primary" class="inside_bar">
    <span>RECEPTIONIST PANEL</span>
  </mat-toolbar>
    <mat-sidenav-container>
      <mat-sidenav mode="side" [(opened)]="opened">
        <mat-list>
          <mat-list-item>
            <mat-icon>mode_edit</mat-icon>
            <button mat-button (click)="o_c()">CRUD CUSTOMERS</button>
          </mat-list-item>
          <mat-divider></mat-divider>
          <mat-list-item>
            <mat-icon>settings</mat-icon>
            <button mat-button (click)="o_s()">SETTINGS</button>
          </mat-list-item>
          <mat-divider></mat-divider>
          <mat-list-item>
            <mat-icon>logout</mat-icon>
            <button mat-button>LOG OUT</button>
          </mat-list-item>
          <mat-divider></mat-divider>
           <mat-list-item>
            <mat-icon>more</mat-icon>
            <button mat-button (click)="o_s()">ABOUTS</button>
          </mat-list-item>
          <mat-divider></mat-divider>
        </mat-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <button mat-button (click)="opened=!opened"><mat-icon>home</mat-icon></button>
        <div *ngIf="t_one">
          <app-crud-customers></app-crud-customers>
        </div>
        <div *ngIf="t_two">
          <app-settings-customer></app-settings-customer>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  </div>
  `,
  styles: [`
  .toolbar{
    display: flex;
    justify-content: space-between;
    border-radius: 20px 20px 0px 0px;
  }
  .inside_bar{
    border-radius: 0px 0px 20px 20px;
  }
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
  }
  `]
})
export class ReceptionDashboardComponent implements OnInit {
  opened = false;
  t_one  = true;
  t_two  = false;
  c_b    = true;

  o_c = () => {
    this.t_two = false;
    this.t_one = true;
    this.opened = false;
  }
  o_s = () => {
    this.t_one = false;
    this.t_two = true;
    this.opened = false;
  }
  o_d = () => {
    this.r.navigateByUrl("/dashboard");
  }

  constructor(private r: Router) { }

  ngOnInit(): void {
  }

}
