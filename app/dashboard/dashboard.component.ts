import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminLoginComponent } from '../admin-login/admin-login.component';
import { FinanceLoginComponent } from '../finance-login/finance-login.component';
import { ReceptionLoginComponent } from '../reception-login/reception-login.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashbord.component.html',
  styles: [`
    .toolbar-cont{
      justify-content: center;
      font-size: 30px;
      border-radius: 20px 20px 0px 0px;
    }
    .litle-bar{
      justify-content: center;
      max-width: 200px;
      border-radius: 0px 0px 20px 20px;
    }
    .btn-click{
      display: flex;
      justify-content: space-evenly;
    }
    img{

    }
    .btn-item{
      /*
      max-width: 200px;
      height: auto;
      justify-content: center; */
    }
    @media(max-width: 500px) {
      .btn-click
      {
        display: block;
      }
      .btn-item{

      }
    }
  `]
})
export class DashboardComponent implements OnInit {

  align_type: any = 'center'

  constructor(public d: MatDialog) { }

  oA_D = () => {
    this.d.open(AdminLoginComponent)
  }
  oR_D = () => {
    this.d.open(ReceptionLoginComponent);
  }
  oF_D = () => {
    this.d.open(FinanceLoginComponent);
  }

  ngOnInit(): void {}

}
